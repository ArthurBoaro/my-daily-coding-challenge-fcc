def decode_qr(qr_code):
    
    n = len(qr_code)
    new_matrix = qr_code[:]
    result = ""
    rotations = 0

    while rotations < 4:

        top_left = (
            new_matrix[0][0] == "1" and
            new_matrix[0][1] == "1" and
            new_matrix[1][0] == "1" and
            new_matrix[1][1] == "1"
        )

        top_right = (
            new_matrix[0][n - 2] == "1" and
            new_matrix[0][n - 1] == "1" and
            new_matrix[1][n - 2] == "1" and
            new_matrix[1][n - 1] == "1"
        )

        bottom_left = (
            new_matrix[n - 2][0] == "1" and
            new_matrix[n - 2][1] == "1" and
            new_matrix[n - 1][0] == "1" and
            new_matrix[n - 1][1] == "1"
        )

        if top_left and top_right and bottom_left:
            break

        new_matrix = rotate_90(new_matrix)
        rotations += 1

    for i in range(n):
        for j in range(n):

            in_top_left = i < 2 and j < 2
            in_top_right = i < 2 and j >= n - 2
            in_bottom_left = i >= n - 2 and j < 2

            if not (in_top_left or in_top_right or in_bottom_left):
                result += new_matrix[i][j]

    return result


def rotate_90(matrix):
    n = len(matrix)

    arr = [list(row) for row in matrix]

    rotated = [[""] * n for _ in range(n)]

    for i in range(n):
        for j in range(n):
            rotated[j][n - 1 - i] = arr[i][j]

    return ["".join(row) for row in rotated]