def get_difficulty(track):

    points = 0
    lastTurn = None

    for turn in track:
        if turn in ("L", "R"):
            if lastTurn in ("L", "R"):
                if lastTurn != turn:
                    points += 15
                else:
                    points += 5
            else:
                points += 5
            lastTurn = turn
        else:
            lastTurn = None

    if points >= 200:
        return "Hard"
    elif points > 100:
        return "Medium"
            
    return "Easy"