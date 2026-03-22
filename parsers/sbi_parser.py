import pandas as pd
from backend.parsers.base import BaseParser

class SBIParser(BaseParser):
    def parse(self, df):
        # カラム正規化
        df.columns = [c.replace('\n', '').strip() for c in df.columns]
        
        processed = []
        df_settlements = df[df['新規決済'].str.contains('決済', na=False)].copy()
        df_entries = df[df['新規決済'].str.contains('新規', na=False)].copy()

        for _, s_row in df_settlements.iterrows():
            target_price = self.clean_val(s_row['決済対象約定価格損益PIPS'])
            entry_match = df_entries[
                (df_entries['約定価格約定数量'].apply(self.clean_val) == target_price) & 
                (df_entries['通貨ペア'] == s_row['通貨ペア'])
            ].sort_values(by='約定日時', ascending=False)

            if not entry_match.empty:
                e_row = entry_match.iloc[0]
                exit_dt = pd.to_datetime(str(s_row['約定日時']).replace('\n', ' '))
                entry_dt = pd.to_datetime(str(e_row['約定日時']).replace('\n', ' '))
                
                processed.append({
                    'id': f"sbi_{s_row['注文番号']}",
                    'datetime_utc': exit_dt.tz_localize('Asia/Tokyo').tz_convert('UTC'),
                    'entry_at_utc': entry_dt.tz_localize('Asia/Tokyo').tz_convert('UTC'),
                    'pair': str(s_row['通貨ペア']).replace(' ', '').replace('/', '_'),
                    'side': 'Sell' if '売' in str(e_row['売買']) else 'Buy',
                    'price': self.clean_val(s_row['約定価格約定数量']),
                    'entry_price': target_price,
                    'pnl': self.clean_val(s_row['実現損益スワップポイント'], to_int=True),
                    'datetime_jst': exit_dt.strftime("%Y/%m/%d %H:%M:%S")
                })
        return pd.DataFrame(processed)