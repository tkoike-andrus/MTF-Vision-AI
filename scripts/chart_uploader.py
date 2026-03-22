"""
AATM Chart Uploader — MT5チャート画像をSupabase Storageへ自動アップロード

使い方:
  1. pip install supabase watchdog
  2. chart_uploader.bat をダブルクリック（または chart_uploader.py を直接実行）

動作:
  - 5分足確定タイミング（00分, 05分, 10分, ...）+ 15秒後に画像をチェック
  - 変更があればSupabase Storageに上書きアップロード
  - MT5が動いている間、バックグラウンドで常駐
"""

import os
import sys
import time
import hashlib
from datetime import datetime, timedelta
from pathlib import Path

try:
    from supabase import create_client
except ImportError:
    print("[ERROR] supabase パッケージが必要です")
    print("  pip install supabase")
    sys.exit(1)

# ============================================================
# 設定
# ============================================================
CHART_FOLDER = r"C:\Users\surf_\AppData\Roaming\MetaQuotes\Terminal\EE0304F13905552AE0B5EAEFB04866EB\MQL5\Files\AATM_Charts"
SUPABASE_URL = os.environ.get("SUPABASE_URL", "")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_KEY", "")
BUCKET_NAME = "chart-images"
CHART_FILES = ["m5.png", "h1.png", "h4.png", "d1.png"]
UPLOAD_DELAY_SEC = 15  # 足確定後の待機秒数（MT5の画像生成を待つ）
INTERVAL_MIN = 5       # 監視間隔（分）

# ============================================================
# ハッシュでファイル変更を検出
# ============================================================
last_hashes: dict[str, str] = {}

def file_hash(path: str) -> str:
    """ファイルのMD5ハッシュを返す"""
    try:
        with open(path, "rb") as f:
            return hashlib.md5(f.read()).hexdigest()
    except FileNotFoundError:
        return ""

def is_changed(path: str, filename: str) -> bool:
    """前回アップロード時からファイルが変更されたか"""
    current = file_hash(path)
    if not current:
        return False
    prev = last_hashes.get(filename, "")
    if current != prev:
        last_hashes[filename] = current
        return True
    return False

# ============================================================
# Supabase Storageアップロード
# ============================================================
def upload_charts(client) -> int:
    """変更されたチャート画像をアップロード。アップロード数を返す"""
    uploaded = 0
    for filename in CHART_FILES:
        filepath = os.path.join(CHART_FOLDER, filename)
        if not is_changed(filepath, filename):
            continue

        try:
            with open(filepath, "rb") as f:
                data = f.read()

            storage_path = f"charts/{filename}"

            # upsert=True で上書きアップロード（ディスク節約）
            client.storage.from_(BUCKET_NAME).upload(
                path=storage_path,
                file=data,
                file_options={
                    "content-type": "image/png",
                    "upsert": "true",
                },
            )
            size_kb = len(data) / 1024
            print(f"  [UPLOAD] {filename} ({size_kb:.0f}KB)")
            uploaded += 1

        except Exception as e:
            err_str = str(e)
            # "already exists" は upsert で回避されるはずだが念のため
            if "already exists" in err_str.lower() or "Duplicate" in err_str:
                # リトライ: update で上書き
                try:
                    client.storage.from_(BUCKET_NAME).update(
                        path=storage_path,
                        file=data,
                        file_options={"content-type": "image/png"},
                    )
                    print(f"  [UPDATE] {filename}")
                    uploaded += 1
                except Exception as e2:
                    print(f"  [ERROR] {filename}: {e2}")
            else:
                print(f"  [ERROR] {filename}: {e}")

    return uploaded

# ============================================================
# 次の5分足確定タイミングを計算
# ============================================================
def next_candle_time() -> datetime:
    """次の5分足確定時刻 + UPLOAD_DELAY_SEC を返す"""
    now = datetime.now()
    minute = now.minute
    # 次の5分刻み
    next_min = ((minute // INTERVAL_MIN) + 1) * INTERVAL_MIN
    if next_min >= 60:
        target = now.replace(minute=0, second=0, microsecond=0) + timedelta(hours=1)
    else:
        target = now.replace(minute=next_min, second=0, microsecond=0)

    # MT5の画像生成を待つバッファ
    target += timedelta(seconds=UPLOAD_DELAY_SEC)
    return target

# ============================================================
# バケット初期化
# ============================================================
def ensure_bucket(client):
    """バケットが存在しなければ作成"""
    try:
        client.storage.get_bucket(BUCKET_NAME)
        print(f"  バケット '{BUCKET_NAME}' 確認OK")
    except Exception:
        try:
            client.storage.create_bucket(
                BUCKET_NAME,
                options={"public": True},
            )
            print(f"  バケット '{BUCKET_NAME}' を作成しました")
        except Exception as e:
            if "already exists" in str(e).lower():
                print(f"  バケット '{BUCKET_NAME}' 確認OK")
            else:
                print(f"  [ERROR] バケット作成失敗: {e}")
                sys.exit(1)

# ============================================================
# メインループ
# ============================================================
def main():
    print("=" * 60)
    print("  AATM Chart Uploader v1.0")
    print("  MT5チャート画像 → Supabase Storage 自動アップロード")
    print("=" * 60)
    print()

    # 環境変数チェック
    url = SUPABASE_URL
    key = SUPABASE_KEY

    # .env ファイルからの読み込みフォールバック
    env_file = Path(__file__).parent / ".env"
    if (not url or not key) and env_file.exists():
        print(f"  .env ファイルから読み込み: {env_file}")
        with open(env_file) as f:
            for line in f:
                line = line.strip()
                if line.startswith("SUPABASE_URL="):
                    url = line.split("=", 1)[1].strip().strip('"')
                elif line.startswith("SUPABASE_SERVICE_KEY="):
                    key = line.split("=", 1)[1].strip().strip('"')

    if not url or not key:
        print("[ERROR] Supabase認証情報が設定されていません")
        print()
        print("以下のいずれかで設定してください:")
        print("  1. 環境変数: SUPABASE_URL, SUPABASE_SERVICE_KEY")
        print("  2. scripts/.env ファイル:")
        print('     SUPABASE_URL="https://xxx.supabase.co"')
        print('     SUPABASE_SERVICE_KEY="sb_secret_xxx"')
        print()
        input("Enterキーで終了...")
        sys.exit(1)

    print(f"  監視フォルダ: {CHART_FOLDER}")
    print(f"  対象ファイル: {', '.join(CHART_FILES)}")
    print(f"  監視間隔: {INTERVAL_MIN}分足確定 + {UPLOAD_DELAY_SEC}秒後")
    print(f"  Supabase: {url[:40]}...")
    print()

    # フォルダ存在確認
    if not os.path.isdir(CHART_FOLDER):
        print(f"[ERROR] チャートフォルダが見つかりません: {CHART_FOLDER}")
        input("Enterキーで終了...")
        sys.exit(1)

    # Supabase初期化
    client = create_client(url, key)
    ensure_bucket(client)
    print()

    # 初回: 即座にアップロード
    print(f"[{datetime.now().strftime('%H:%M:%S')}] 初回アップロード実行...")
    count = upload_charts(client)
    if count == 0:
        print("  変更なし（または画像未生成）")
    print()

    # 常駐ループ
    print("常駐監視を開始します（Ctrl+C で終了）")
    print("-" * 60)

    try:
        while True:
            target = next_candle_time()
            wait_sec = (target - datetime.now()).total_seconds()
            if wait_sec < 0:
                wait_sec += INTERVAL_MIN * 60

            next_str = target.strftime("%H:%M:%S")
            print(f"[{datetime.now().strftime('%H:%M:%S')}] 次回チェック: {next_str} ({wait_sec:.0f}秒後)")

            time.sleep(max(wait_sec, 1))

            print(f"[{datetime.now().strftime('%H:%M:%S')}] チャート画像チェック中...")
            count = upload_charts(client)
            if count == 0:
                print("  変更なし")
            else:
                print(f"  {count}枚アップロード完了")
            print()

    except KeyboardInterrupt:
        print()
        print("終了しました。")

if __name__ == "__main__":
    main()
