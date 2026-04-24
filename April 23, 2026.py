def get_direction(time1, time2):

    hour1, minute1 = map(int, time1.split(":"))
    hour2, minute2 = map(int, time2.split(":"))
    total_minutes1 = hour1 * 60 + minute1
    total_minutes2 = hour2 * 60 + minute2
    
    forward = (total_minutes2 - total_minutes1) % (24 * 60)
    backward = (total_minutes1 - total_minutes2) % (24 * 60)
    
    if forward < backward:
        return "forward"
    if backward < forward:
        return "backward"

    return "equal"