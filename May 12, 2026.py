def get_frequency(s):

    frequency = {}

    for char in s:
        if char not in frequency:
            frequency[char] = 1
        else:
            frequency[char] += 1

    return frequency