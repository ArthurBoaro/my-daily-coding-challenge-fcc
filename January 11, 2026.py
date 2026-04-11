def golf_score(par, strokes):

    if strokes == 1:
        return "Hole in one!"
    elif par - strokes >= 2:
        return "Eagle"
    elif par - strokes == 1:
        return "Birdie"
    elif par == strokes:
        return "Par"
    elif strokes - par == 1:
        return "Bogey"

    return "Double bogey"