def has_no_repeats(s):

    repeatString = ""

    for char in s:
        if char in repeatString:
            return False
        
        repeatString += char

        if char == " ":
            repeatString = ""
                
    return True