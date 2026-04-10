def is_integer_hypotenuse(a, b):

    c = ((a ** 2) + (b ** 2)) ** 0.5
    return c.is_integer()