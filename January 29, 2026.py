def separate_letters_and_numbers(s):
    last_char = ""
    new_s = ""

    for char in s:
        if (last_char.isalpha() and char.isdigit()) or (last_char.isdigit() and char.isalpha()):
            new_s += "-"
        
        new_s += char
        last_char = char

    return new_s