def get_fastest_speed(times):

    segments = [320, 280, 350, 300, 250]
    speed = 0
    fastest_speed = 0
    segment = 0
    i = 0

    for time in times:
        speed = round(segments[i] / time, 2)

        if speed > fastest_speed:
            fastest_speed = speed
            segment = i + 1
        
        i += 1

    return f"The luger's fastest speed was {fastest_speed} m/s on segment {segment}."