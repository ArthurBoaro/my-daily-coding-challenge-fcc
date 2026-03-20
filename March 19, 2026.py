def invert_matrix(matrix):

    new_matrix = []
    letters = list({letter for row in matrix for letter in row})

    for row in matrix:
        new_row = []
        for letter in row:
            if letter == letters[0]:
                new_row.append(letters[1])
            else:
                new_row.append(letters[0])
        new_matrix.append(new_row)
    return new_matrix

invert_matrix([["a", "b"], ["a", "a"]])