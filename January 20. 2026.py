def to_consonant_case(s):

    vowels = ["a", "e", "i", "o", "u"]
    new_s = ""

    for char in s:
        if char.lower() in vowels:
            new_s += char.lower()
        elif char == "-":
            new_s += "_"
        else:
            new_s += char.upper()

    return new_s