def get_hill_rating(drop, distance, hill_type):

    steepness = drop / distance

    if hill_type == "Downhill":
        steepness *= 1.2
    elif hill_type == "Slalom":
        steepness *= 0.9
    else:
        steepness *= 1
    
    if steepness > 0.25:
        return "Black"
    elif steepness > 0.1:
        return "Blue"
    
    return "Green"