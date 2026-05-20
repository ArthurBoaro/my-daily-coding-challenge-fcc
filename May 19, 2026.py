def sleep_debt(hours_slept, target_hours):

    hours_needed = 0

    total = sum(n - target_hours for n in hours_slept)

    if total > target_hours:
        hours_needed = 0
        return hours_needed

    if total > 0:
        hours_needed = target_hours - total

    elif total < 0:
        hours_needed = target_hours + abs(total)

    return hours_needed