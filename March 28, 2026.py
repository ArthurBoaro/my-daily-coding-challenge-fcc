def pascal_row(n):
    arr = [[1]]

    for i in range(1, n):
        previous_row = arr[i - 1]
        new_row = [1]

        for j in range(1, len(previous_row)):
            new_row.append(previous_row[j - 1] + previous_row[j])

        new_row.append(1)
        arr.append(new_row)

    return arr[n - 1]