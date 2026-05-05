def get_greeting(s):

    hours, minutes = map(int, s.split(":"))
    total_minutes = hours * 60 + minutes

    if (total_minutes >= 5 * 60) and (total_minutes < 12 * 60):
        return "Good morning"
    elif (total_minutes >= 12 * 60) and (total_minutes < 18 * 60):
        return "Good afternoon"
    elif (total_minutes >= 18 * 60) and (total_minutes < 22 * 60):
        return "Good evening"

    return "Good night"