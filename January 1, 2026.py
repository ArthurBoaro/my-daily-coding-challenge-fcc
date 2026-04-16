def resolution_streak(days):

    fail = False
    day_failed = 1
    day_streak = 0

    for arr in days:
        if arr[0] < 10000 or arr[1] > 120 or arr[2] < 5:
            fail = True
            day_failed = day_streak + 1
            break
        
        day_streak += 1

    
    if fail:
        return f"Resolution failed on day {day_failed}: {day_streak} day streak."

    return f"Resolution on track: {day_streak} day streak."