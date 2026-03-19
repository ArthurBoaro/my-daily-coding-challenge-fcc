def check_eligibility(athlete_weights, sled_weight):

    person = len(athlete_weights)
    total_weight = sum(athlete_weights) + sled_weight


    if ((sled_weight < 162 or total_weight > 247) and person == 1):
        return "Not Eligible"
    elif ((sled_weight < 170 or total_weight > 390) and person == 2):
        return "Not Eligible"
    elif ((sled_weight < 210 or total_weight > 630) and person == 4):
        return "Not Eligible"

    return "Eligible"