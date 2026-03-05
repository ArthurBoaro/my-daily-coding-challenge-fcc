from datetime import datetime, timedelta

def count_business_days(start, end):

    count = 0
    increment_day = datetime.strptime(start, "%Y-%m-%d").date()
    end_day = datetime.strptime(end, "%Y-%m-%d").date()
    
    
    while increment_day <= end_day:
        if increment_day.weekday() < 5:
            count += 1
        increment_day += timedelta(days=1)

    return count