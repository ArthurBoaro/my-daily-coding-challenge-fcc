def get_rotation(n):

    rotation = 0
    new_n = n
    digit_count = len(str(n))

    while True:

        if new_n % digit_count == 0:
            return rotation

        new_n_s = str(new_n)
        new_n_s = new_n_s[1:] + new_n_s[0]
        new_n = int(new_n_s)
        rotation += 1
        if new_n == n:
            break

    return "none"