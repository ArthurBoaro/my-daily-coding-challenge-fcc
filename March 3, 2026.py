import math

def count_perfect_cubes(a, b):

    total = 0

    for i in range(min(a, b), max(a, b) + 1):
        root = round(math.copysign(abs(i) ** (1/3), i))

        if root ** 3 == i:
            total += 1
    return total