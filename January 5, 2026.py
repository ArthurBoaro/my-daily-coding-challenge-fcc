def tire_status(pressures_psi, range_bar):

    tires_status = []
    range_psi = [range_bar[0] * 14.5038, range_bar[1] * 14.5038]

    for tire in pressures_psi:
        if tire > range_psi[1]:
            tires_status.append("High")
        elif tire > range_psi[0]:
            tires_status.append("Good")
        else:
            tires_status.append("Low")

    return tires_status