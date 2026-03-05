def count_letters_and_numbers(s):

    number = 0
    letter = 0

    for char in s:
        if char.isdigit():
            number += 1
        elif char.isalpha():
            letter += 1
    
    letter_word = "letter" if letter == 1 else "letters"
    number_word = "number" if number == 1 else "numbers"
    
    return f"The string has {letter} {letter_word} and {number} {number_word}."