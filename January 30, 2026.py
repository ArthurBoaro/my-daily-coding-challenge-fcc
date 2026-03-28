def find_pawn_moves(position):
    letter = position[:1]
    number = int(position[1:])
    possibles_positions = []

    if number == 2:
        possibles_positions.append(letter + str(number + 1))
        possibles_positions.append(letter + str(number + 2))
        return possibles_positions

    possibles_positions.append(letter + str(number + 1))
    return possibles_positions