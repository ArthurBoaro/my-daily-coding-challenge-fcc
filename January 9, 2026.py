def is_circular_prime(n):

    s = str(n)

    for i in range(len(s)):
        rotation_n = int(s[1:] + s[0])
        for j in range(2, int(rotation_n**0.5) + 1):
            if rotation_n % j == 0:
                return False

    return True