def shift_matrix(matrix, shift):

    new_matrix = []
    arr = []
    m = len(matrix)
    n = len(matrix[0])
    count = 0

    for i in range(m):
        for j in range(n):
            arr.append(matrix[i][j])

    l = len(arr)
    shift = ((shift % l) + l) % l

    for i in range(shift):
        arr.insert(0, arr.pop())

    for i in range(m):
        row = []
        for j in range(n):
            row.append(arr[count])
            count += 1
        new_matrix.append(row)

    return new_matrix