from datetime import datetime

def digital_detox(logs):
    
    logs.sort(key=lambda x: datetime.fromisoformat(x))

    login_day = 0
    last_login_day = None
    last_login_time = None

    for log in logs:
        current_date = datetime.fromisoformat(log)
        current_day = current_date.day

        if last_login_time is not None:
            diff_minutes = abs((current_date - last_login_time).total_seconds()) / 60

            if diff_minutes < 4 * 60:
                return False

        if current_day == last_login_day:
            login_day += 1
        else:
            login_day = 1

        if login_day > 2:
            return False

        last_login_time = current_date
        last_login_day = current_day

    return True