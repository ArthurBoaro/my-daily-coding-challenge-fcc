def is_in_crossword(char):

    grid = [
    [0, 1, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 0]
    ];

    binary = format(ord(char), "08b")

    for row in grid:
        row_check = "".join(map(str, row))
        if row_check == binary:
            return True

    for col in range(len(grid[0])):
        column = []

        for row in range(len(grid)):
            column.append(grid[row][col])

        column_check = "".join(map(str, column))

        if column_check == binary:
            return True

    return False