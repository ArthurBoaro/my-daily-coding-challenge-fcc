def is_valid_isbn10(s):

    string = s.replace("-", "")
    total = 0

    for i, char in enumerate(string):
        if char == "X":
            if i != 9:
                return False
            else:
                total += 10 * (i + 1)
        else:
            total += int(char) * (i + 1)
    
    return total % 11 == 0