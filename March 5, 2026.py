def smallest_gap(s):

    lastSeen = {}
    result = {}
    minDistance = 10000000000

    for i in range(len(s)):
        char = s[i]

        if (char in lastSeen):
            distance = i - lastSeen[char]

            if (distance < minDistance):
                minDistance = distance
                result = {
                    "minChar": char,
                    "positions": [lastSeen[char], i],
                    "distance": distance
                }
        lastSeen[char] = i

    return s[result["positions"][0] + 1 : result["positions"][1]]