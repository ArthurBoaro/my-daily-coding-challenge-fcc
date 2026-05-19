def transpose(matrix):

    transposed = list(map(list, zip(*matrix)))

    return transposed