def nth_fibonacci(n):

    if n == 0:
        return 0
    if n == 1:
        return 1

    fibonacci_n = 0
    n0 = 0
    n1 = 1

    for _ in range(2, n):
        fibonacci_n = n0 + n1
        n0, n1 = n1, fibonacci_n

    return fibonacci_n
