def capitalize_fibonacci(s):

    new_s = ""
    fibonacci_arr = [0]
    fibonacci = 0
    n0 = 0
    n1 = 1

    for i in range(0, len(s)):
        fibonacci = n1 + n0

        if i in fibonacci_arr:
            new_s += s[i].upper()
        else:
            new_s += s[i].lower()

        fibonacci_arr.append(fibonacci)
        n0 = n1
        n1 = fibonacci

    return new_s