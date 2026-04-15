def get_last_letter(s):

    last_word_code = 0
    last_word = ""
    
    for char in s:
        if char.isalpha():
            if ord(char.lower()) > last_word_code:
                last_word_code = ord(char.lower())
                last_word = char

    return last_word