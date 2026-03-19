import re

def largest_number(s):

    numbers = list(map(float, re.split(r"[,!?;:]+", s)))

    return max(numbers)