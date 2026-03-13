def is_valid_domino_chain(dominoes):

    is_not_domino = any(n < 1 or n > 6 for pair in dominoes for n in pair)

    if is_not_domino:
        return False

    for i in range(len(dominoes) - 1):
        if dominoes[i][1] != dominoes[i+1][0]:
            return False

    return True