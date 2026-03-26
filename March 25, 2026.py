from datetime import datetime

def can_retake(finish_time, current_time):

    finish_date = datetime.fromisoformat(finish_time)
    current_date = datetime.fromisoformat(current_time)

    difference_time = current_date - finish_date
    difference_time_hours = difference_time.total_seconds() / 3600

    return difference_time_hours >= 48