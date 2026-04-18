def decode(message):

    key = "VLHCGMDLNH"
    key_i = 0
    decoded_message = ""

    for char in message: 
        if char.isalpha():
            key_char = key[key_i % len(key)]
            key_index = ord(key_char.upper()) - ord('A') + 1
            char_index = ord(char.upper()) - ord('A') + 1
            new_index = (char_index - key_index - 1) % 26 + 1
            decoded_message += chr(new_index + ord('A') - 1)
            key_i += 1
        else:
            decoded_message += char

    return decoded_message

decode("YAVJYNXE")