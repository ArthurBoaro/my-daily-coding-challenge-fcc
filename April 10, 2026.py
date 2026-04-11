def rook_attack(rook1, rook2):

    letter_rook1 = rook1[0]
    letter_rook2 = rook2[0]
    n_rook1 = rook1[1:]
    n_rook2 = rook2[1:]
    
    return letter_rook1 == letter_rook2 or n_rook1 == n_rook2