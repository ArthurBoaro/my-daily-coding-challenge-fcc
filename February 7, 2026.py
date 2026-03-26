def get_landing_stance(start_stance, rotation):
 
    stance = True if start_stance == "Regular" else False
    flip = abs(int(rotation / 180))

    if flip % 2:
        stance = not stance

    return "Regular" if stance else "Goofy"