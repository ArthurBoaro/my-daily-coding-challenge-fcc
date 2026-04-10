def get_next_bingo_number(n):

    next_n = int(n[1:]) + 1
    if next_n > 75:
        return "B1"
    elif next_n > 60:
        return "O" + str(next_n)
    elif next_n > 45:
        return "G" + str(next_n)
    elif next_n > 30:
        return "N" + str(next_n)
    elif next_n > 15:
        return "I" + str(next_n)

    return "B" + str(next_n)