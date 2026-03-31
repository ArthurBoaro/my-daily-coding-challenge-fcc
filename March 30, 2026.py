from datetime import datetime
import calendar

def get_due_date(date_str):

    year, month, day = map(int, date_str.split("-"))
    date = datetime(year, month, day)

    year = date.year
    month = date.month
    
    month += 9
    year += (month - 1) // 12
    month = ((month - 1) % 12) + 1
    
    last_day = calendar.monthrange(year, month)[1]

    day = min(day, last_day)

    return f"{year:04d}-{month:02d}-{day:02d}"