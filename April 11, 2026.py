def rook_bishop_attack(rook, bishop):

    letter_rook = rook[0]
    letter_bishop = bishop[0]
    n_rook = int(rook[1:])
    n_bishop = int(bishop[1:])
    col_rook = ord(letter_rook)
    col_bishop = ord(letter_bishop)

    if letter_rook == letter_bishop or n_rook == n_bishop:
        return "rook"

    if abs(n_rook - n_bishop) == abs(col_rook - col_bishop):
        return "bishop"

    return "neither"