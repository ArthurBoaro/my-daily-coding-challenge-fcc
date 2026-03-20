def get_shadow(time):

    hour, minutes = map(int, time.split(":"))
    total_hour = hour + minutes / 60

    if (hour < 6) or (hour >= 18) or (hour == 12 and minutes == 0):
        return "No shadow"

    shadow_direction = ""
    shadow_length = 0

    if (hour - 12) < 0:
        shadow_direction = "west"
    else:
        shadow_direction = "east"

    shadow_length = abs(12 - total_hour) ** 3

    if minutes == 0:
        shadow_length = int(shadow_length)

    return f"{shadow_length}ft {shadow_direction}"