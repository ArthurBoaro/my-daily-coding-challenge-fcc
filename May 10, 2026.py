import re

def is_valid_isbn_13(s):

    pattern = r"^[0-9-]+$"
    if not re.match(pattern, s):
        return False

    num_s = s.replace("-", "")
    if len(num_s) != 13:
        return False

    result = 0
    for i in range(len(num_s)):
        if i % 2 == 0:
            result += int(num_s[i]) * 1
        else:
            result += int(num_s[i]) * 3 

    if result % 10 != 0:
        return False
        
    return True