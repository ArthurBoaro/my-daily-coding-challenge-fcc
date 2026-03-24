def largest_difference(skater1, skater2):

    lap = 0
    lap_difference = 0
    largest_lap_difference = 0

    for i in range(len(skater1)):
        lap_difference = abs(skater1[i] - skater2[i])

        if lap_difference > largest_lap_difference:
            largest_lap_difference = lap_difference
            lap = i + 1
            
    return lap