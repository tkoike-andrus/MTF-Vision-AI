import os
import time
import requests
from datetime import datetime, timedelta, timezone
from pathlib import Path
from dotenv import load_dotenv
from supabase import create_client

# --- 環境変数のロード ---
current_file_path = Path(__file__).resolve()
env_path = current_file_path.parent.parent.parent / 'frontend' / '.env.local'
load_dotenv(dotenv_path=env_path)

supabase = create_client(
    os.getenv("NEXT_PUBLIC_SUPABASE_URL"), 
    os.getenv("NEXT_PUBLIC_SUPABASE_ANON_KEY")
)

# --- 設定 ---
END_POINT = 'https://forex-api.coin.z.com/public'
PAIRS = ['USD_JPY', 'EUR_JPY', 'GBP_JPY', 'AUD_JPY']

# 足種の定義
SHORT_RES = ['1min', '5min', '10min','15min', '30min', '1hour']
LONG_RES = ['4hour', '8hour', '12hour', '1day', '1week', '1month']

# --- 取得期間の設定 (ここを更新しました) ---
START_DATE_SHORT = datetime(2023, 10, 28) # 短期足の開始日
END_DATE_SHORT = datetime.now()           # 今日まで取得
YEARS_LONG = ['2023', '2024', '2025', '2026'] # 長期足の対象年

def normalize_timestamp(unix_ms, res):
    """
    Unixミリ秒を正規化。
    日足・週足・月足の場合は 00:00:00 UTC に固定。
    それ以外はそのままの時刻を保持。
    """
    dt = datetime.fromtimestamp(int(unix_ms) / 1000, tz=timezone.utc)
    if res in ['1day', '1week', '1month']:
        dt = dt.replace(hour=0, minute=0, second=0, microsecond=0)
    return dt.isoformat()

def fetch_and_upsert(pair, res, date_val):
    print(f"  Fetching {pair} {res} for {date_val}...")
    url = f"{END_POINT}/v1/klines?symbol={pair}&priceType=ASK&interval={res}&date={date_val}"
    
    try:
        response = requests.get(url).json()
        if response['status'] != 0:
            print(f"    [Skip] Status {response['status']}")
            return False
            
        data = response.get('data', [])
        if not data: return True

        batch_data = []
        for item in data:
            batch_data.append({
                "pair": pair,
                "resolution": res,
                "timestamp": normalize_timestamp(item['openTime'], res),
                "open": float(item['open']),
                "high": float(item['high']),
                "low": float(item['low']),
                "close": float(item['close']),
                "volume": float(item.get('volume', 0))
            })

        if batch_data:
            supabase.table("market_data").upsert(batch_data, on_conflict="pair,resolution,timestamp").execute()
            print(f"    Successfully upserted {len(batch_data)} records.")
        return True
    except Exception as e:
        print(f"    [Error] {e}")
        return False

def main():
    # 実行前に念押し：TRUNCATE market_data; をSQL Editorで実行済みであることを推奨します
    
    # 1. 長期足の処理 (年次ループ)
    print("=== Processing Long-term Data (Annual) ===")
    for pair in PAIRS:
        for res in LONG_RES:
            for year in YEARS_LONG:
                fetch_and_upsert(pair, res, year)
                time.sleep(1.2) # 秒間制限を考慮

    # 2. 短期足の処理 (日次ループ)
    print("=== Processing Short-term Data (Daily) ===")
    curr = START_DATE_SHORT
    while curr <= END_DATE_SHORT:
        date_str = curr.strftime('%Y%m%d')
        for pair in PAIRS:
            for res in SHORT_RES:
                fetch_and_upsert(pair, res, date_str)
                time.sleep(1.2)
        curr += timedelta(days=1)

if __name__ == "__main__":
    main()