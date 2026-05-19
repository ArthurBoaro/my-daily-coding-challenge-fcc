from datetime import datetime, timezone

def mongo_id_to_date(s):
    
    hex = s[0:8]
    decimal = int(hex, 16)
    date = datetime.fromtimestamp(decimal, timezone.utc)
    
    return date.strftime("%Y-%m-%dT%H:%M:%S.000Z")