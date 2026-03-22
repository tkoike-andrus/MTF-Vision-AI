import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";

export const dynamic = 'force-dynamic';

const BUCKET_NAME = "chart-images";
const CHART_FILES = [
  { file: "m5.png", label: "5分足" },
  { file: "h1.png", label: "1時間足" },
  { file: "h4.png", label: "4時間足" },
  { file: "d1.png", label: "日足" },
];

/**
 * GET /api/bot/chart-images?user_id=xxx
 * Reads chart images from Supabase Storage (cloud)
 * Falls back to local file system if storage fails (localhost dev)
 */
export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get("user_id");
    if (!userId) {
      return NextResponse.json({ error: "user_id required" }, { status: 400 });
    }

    const supabase = createServiceRoleClient();
    const images: { file: string; label: string; base64: string; modified_at: string }[] = [];
    const errors: string[] = [];

    // Try Supabase Storage first
    for (const { file, label } of CHART_FILES) {
      const storagePath = `charts/${file}`;
      try {
        const { data, error } = await supabase.storage
          .from(BUCKET_NAME)
          .download(storagePath);

        if (error || !data) {
          errors.push(`${file}: not found in storage`);
          continue;
        }

        const buffer = Buffer.from(await data.arrayBuffer());
        images.push({
          file,
          label,
          base64: buffer.toString("base64"),
          modified_at: new Date().toISOString(),
        });
      } catch {
        errors.push(`${file}: storage error`);
      }
    }

    // Fallback to local filesystem (for localhost development)
    if (images.length === 0) {
      try {
        const { readFile, stat } = await import("fs/promises");
        const { join } = await import("path");

        const { data: config } = await supabase
          .from("bot_configs")
          .select("chart_image_folder")
          .eq("user_id", userId)
          .single();

        if (config?.chart_image_folder) {
          const folder = config.chart_image_folder;
          for (const { file, label } of CHART_FILES) {
            const filePath = join(folder, file);
            try {
              const [fileBuffer, fileStat] = await Promise.all([
                readFile(filePath),
                stat(filePath),
              ]);
              images.push({
                file,
                label,
                base64: fileBuffer.toString("base64"),
                modified_at: fileStat.mtime.toISOString(),
              });
            } catch {
              // Already in errors from storage attempt
            }
          }
        }
      } catch {
        // fs not available (Vercel) — skip local fallback
      }
    }

    return NextResponse.json(
      {
        images,
        errors: images.length > 0 ? [] : errors,
        source: images.length > 0 && errors.length === 0 ? "storage" : "local",
        chart_count: images.length,
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
          "Pragma": "no-cache",
        },
      }
    );
  } catch (err) {
    console.error("Chart images read error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
