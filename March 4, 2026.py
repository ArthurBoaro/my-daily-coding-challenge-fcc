def card_values(cards):

    arr = []
    for card in cards:
        if ("A" in card):
            arr.append(1)
        elif (any(c in card for c in "JQK")):
            arr.append(10)
        else: 
            arr.append(int(card[:-1]))

    return arr