/**
 * X (Twitter) API v2 — Post tweets with media
 * Uses OAuth 1.0a for authentication (Consumer Key + Access Token)
 * Media upload uses v1.1 endpoint, tweet posting uses v2 endpoint
 */

import crypto from "crypto";

interface XCredentials {
  consumerKey: string;
  consumerSecret: string;
  accessToken: string;
  accessTokenSecret: string;
}

/**
 * Generate OAuth 1.0a signature for X API requests
 */
function generateOAuthSignature(
  method: string,
  url: string,
  params: Record<string, string>,
  creds: XCredentials
): string {
  const sortedParams = Object.keys(params)
    .sort()
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join("&");

  const baseString = [
    method.toUpperCase(),
    encodeURIComponent(url),
    encodeURIComponent(sortedParams),
  ].join("&");

  const signingKey = `${encodeURIComponent(creds.consumerSecret)}&${encodeURIComponent(creds.accessTokenSecret)}`;

  return crypto
    .createHmac("sha1", signingKey)
    .update(baseString)
    .digest("base64");
}

/**
 * Build OAuth 1.0a Authorization header
 */
function buildOAuthHeader(
  method: string,
  url: string,
  creds: XCredentials,
  extraParams: Record<string, string> = {}
): string {
  const oauthParams: Record<string, string> = {
    oauth_consumer_key: creds.consumerKey,
    oauth_nonce: crypto.randomBytes(16).toString("hex"),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: creds.accessToken,
    oauth_version: "1.0",
  };

  const allParams = { ...oauthParams, ...extraParams };
  const signature = generateOAuthSignature(method, url, allParams, creds);
  oauthParams.oauth_signature = signature;

  const headerParts = Object.keys(oauthParams)
    .sort()
    .map((k) => `${encodeURIComponent(k)}="${encodeURIComponent(oauthParams[k])}"`)
    .join(", ");

  return `OAuth ${headerParts}`;
}

/**
 * Upload media (image) to X via v1.1 media upload endpoint
 * Supports INIT → APPEND → FINALIZE chunked upload for images
 * Returns media_id_string for tweet attachment
 */
export async function uploadMediaToX(
  creds: XCredentials,
  imageBase64: string,
  mimeType: string = "image/png"
): Promise<string | null> {
  const uploadUrl = "https://upload.twitter.com/1.1/media/upload.json";

  try {
    const imageBuffer = Buffer.from(imageBase64, "base64");
    const totalBytes = imageBuffer.length;

    // Step 1: INIT
    const initParams: Record<string, string> = {
      command: "INIT",
      total_bytes: totalBytes.toString(),
      media_type: mimeType,
      media_category: "tweet_image",
    };

    const initAuth = buildOAuthHeader("POST", uploadUrl, creds, initParams);
    const initBody = new URLSearchParams(initParams);

    const initRes = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        Authorization: initAuth,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: initBody.toString(),
    });

    if (!initRes.ok) {
      const errText = await initRes.text();
      console.error("X media INIT failed:", initRes.status, errText);
      return null;
    }

    const initData = await initRes.json();
    const mediaId = initData.media_id_string;

    // Step 2: APPEND (single chunk for images < 5MB)
    const boundary = `----FormBoundary${crypto.randomBytes(8).toString("hex")}`;
    let appendBody = "";
    appendBody += `--${boundary}\r\n`;
    appendBody += `Content-Disposition: form-data; name="command"\r\n\r\nAPPEND\r\n`;
    appendBody += `--${boundary}\r\n`;
    appendBody += `Content-Disposition: form-data; name="media_id"\r\n\r\n${mediaId}\r\n`;
    appendBody += `--${boundary}\r\n`;
    appendBody += `Content-Disposition: form-data; name="segment_index"\r\n\r\n0\r\n`;
    appendBody += `--${boundary}\r\n`;
    appendBody += `Content-Disposition: form-data; name="media_data"\r\n\r\n${imageBase64}\r\n`;
    appendBody += `--${boundary}--\r\n`;

    const appendAuth = buildOAuthHeader("POST", uploadUrl, creds);

    const appendRes = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        Authorization: appendAuth,
        "Content-Type": `multipart/form-data; boundary=${boundary}`,
      },
      body: appendBody,
    });

    if (!appendRes.ok && appendRes.status !== 204) {
      const errText = await appendRes.text();
      console.error("X media APPEND failed:", appendRes.status, errText);
      return null;
    }

    // Step 3: FINALIZE
    const finalizeParams: Record<string, string> = {
      command: "FINALIZE",
      media_id: mediaId,
    };

    const finalizeAuth = buildOAuthHeader("POST", uploadUrl, creds, finalizeParams);
    const finalizeBody = new URLSearchParams(finalizeParams);

    const finalizeRes = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        Authorization: finalizeAuth,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: finalizeBody.toString(),
    });

    if (!finalizeRes.ok) {
      const errText = await finalizeRes.text();
      console.error("X media FINALIZE failed:", finalizeRes.status, errText);
      return null;
    }

    return mediaId;
  } catch (err) {
    console.error("X media upload error:", err);
    return null;
  }
}

/**
 * Post a tweet to X with optional media attachment.
 * Appends invisible uniqueness salt to prevent X's duplicate content rejection (403).
 */
export async function postTweet(
  creds: XCredentials,
  text: string,
  mediaIds?: string[]
): Promise<{ success: boolean; tweetId?: string; error?: string }> {
  const tweetUrl = "https://api.twitter.com/2/tweets";

  try {
    // Append invisible zero-width characters as uniqueness salt (prevents "duplicate content" 403)
    // Uses current timestamp seconds to generate a unique invisible suffix every second
    const salt = String(Date.now() % 100000)
      .split("")
      .map(d => ["\u200B", "\u200C", "\u200D", "\uFEFF", "\u2060", "\u200B\u200C", "\u200C\u200D", "\u200D\u200B", "\u200B\u2060", "\u200C\uFEFF"][Number(d)])
      .join("");
    const uniqueText = text + salt;

    const payload: Record<string, unknown> = { text: uniqueText };

    if (mediaIds && mediaIds.length > 0) {
      payload.media = { media_ids: mediaIds };
    }

    const auth = buildOAuthHeader("POST", tweetUrl, creds);

    const res = await fetch(tweetUrl, {
      method: "POST",
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("X tweet post failed:", res.status, errText);
      return { success: false, error: `HTTP ${res.status}: ${errText}` };
    }

    const data = await res.json();
    return {
      success: true,
      tweetId: data.data?.id,
    };
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : "Unknown error";
    console.error("X tweet post error:", err);
    return { success: false, error: errMsg };
  }
}

/**
 * Post a trade notification to X with chart images (up to 4)
 * Main entry point called from bot analyze flow
 */
export async function postTradeToX(
  creds: XCredentials,
  tweetText: string,
  chartImagesBase64?: string | string[]
): Promise<{ success: boolean; tweetId?: string; error?: string }> {
  let mediaIds: string[] | undefined;

  // Normalize to array
  const images = chartImagesBase64
    ? (Array.isArray(chartImagesBase64) ? chartImagesBase64 : [chartImagesBase64])
    : [];

  // Upload each image (X allows up to 4 media per tweet)
  if (images.length > 0) {
    const uploaded: string[] = [];
    for (const img of images.slice(0, 4)) {
      const mediaId = await uploadMediaToX(creds, img);
      if (mediaId) uploaded.push(mediaId);
    }
    if (uploaded.length > 0) mediaIds = uploaded;
  }

  return postTweet(creds, tweetText, mediaIds);
}
