def dfs(current_chain, available_dominoes, longest_chain):

    if len(current_chain) > len(longest_chain["chain"]):
        longest_chain["chain"] = current_chain[:]

    last_domino = current_chain[-1]
    last_value = last_domino[1]

    for i in range(len(available_dominoes)):

        current = available_dominoes[i]

        next_available = available_dominoes[:]
        next_available.pop(i)

        if last_value == current[0]:
            dfs(current_chain + [current], next_available, longest_chain)

        elif last_value == current[1]:
            dfs(current_chain + [[current[1], current[0]]], next_available, longest_chain)


def get_longest_chain(dominoes):

    longest_chain = { "chain": [] }

    for i in range(len(dominoes)):

        available_dominoes = dominoes[:]
        start = available_dominoes.pop(i)

        dfs([start], available_dominoes, longest_chain)
        dfs([[start[1], start[0]]], available_dominoes, longest_chain)

    return longest_chain["chain"]
