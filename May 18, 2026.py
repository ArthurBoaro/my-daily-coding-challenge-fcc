def get_bingo_range(letter):

    arr = []

    if letter == "B":
        arr.extend(i for i in range(1, 16))
    elif letter == "I":
        arr.extend(i for i in range(16, 31))
    elif letter == "N":
        arr.extend(i for i in range(31, 46))
    elif letter == "G":
        arr.extend(i for i in range(46, 61))
    elif letter == "O":
        arr.extend(i for i in range(61, 76))

    return arr