def vowel_case(s):

    vowels = ["a", "e", "i", "o", "u"]
    new_s = ""

    for char in s:
        if char.lower() in vowels:
            new_s += char.upper()
        else:
            new_s += char.lower()

    return new_s