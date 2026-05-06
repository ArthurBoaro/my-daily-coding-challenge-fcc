def is_narcissistic(n):

    n_str = str(n)
    digits = len(n_str)
    result = 0

    for i in range(digits):
        result += int(n_str[i]) ** digits

    return result == n