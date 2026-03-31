def alarm_check(alarm_time, wake_time):
    [hour_alarm, minute_alarm] = alarm_time.split(":")
    [hour_wake, minute_wake] = wake_time.split(":")
    time_alarm = int(hour_alarm) * 60 + int(minute_alarm)
    time_wakeup = int(hour_wake) * 60 + int(minute_wake)

    if time_wakeup - time_alarm > 10:
        return "late"
    elif time_wakeup - time_alarm >= 0:
        return "on time"

    return "early"