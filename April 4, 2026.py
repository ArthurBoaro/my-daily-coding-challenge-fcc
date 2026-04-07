import re

def is_valid_equation(equation):

    left_side, right_side = equation.split("=")
    tokens = re.findall(r'\d+|[+\-*/]', left_side)
    right_n = float(right_side.strip())

    i = 0
    for _ in range(len(tokens)):
        
        if i >= len(tokens):
            break

        if tokens[i] in ("*", "/"):
            prev_n = float(tokens[i - 1])
            next_n = float(tokens[i + 1])

            if tokens[i] == "*":
                parcial_result = prev_n * next_n
            else:
                parcial_result = prev_n / next_n

            tokens[i - 1:i + 2] = [str(parcial_result)]
            i -= 1
        else:
            i += 1

    result = float(tokens[0])

    i = 1
    for _ in range(len(tokens) // 2):
        
        if i >= len(tokens):
            break

        op = tokens[i]
        n = float(tokens[i + 1])

        if op == "+":
            result += n
        else:
            result -= n

        i += 2

    return result == right_n