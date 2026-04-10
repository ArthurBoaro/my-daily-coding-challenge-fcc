def knight_moves(position):

    possibles_positions = 0
    letters = ["A", "B", "C", "D", "E", "F", "G", "H"]
    letter = position[0] 
    number = int(position[1:])

    if number + 1 < 9 and chr(ord(letter) - 2) in letters:
        possibles_positions += 1
    if number - 1 > 0 and chr(ord(letter) - 2) in letters:
        possibles_positions += 1
    if number + 2 < 9 and chr(ord(letter) - 1) in letters:
        possibles_positions += 1
    if number + 2 < 9 and chr(ord(letter) + 1) in letters:
        possibles_positions += 1
    if number + 1 < 9 and chr(ord(letter) + 2) in letters:
        possibles_positions += 1
    if number - 1 > 0 and chr(ord(letter) + 2) in letters:
        possibles_positions += 1
    if number - 2 > 0 and chr(ord(letter) - 1) in letters:
        possibles_positions += 1
    if number - 2 > 0 and chr(ord(letter) + 1) in letters:
        possibles_positions += 1

    return possibles_positions