def palindrome_locator(s):

    inverted_s = s[::-1]
    if inverted_s != s:
        return "none"
    
    middle_length = len(s) // 2
    if len(s) % 2 == 0:
        return s[middle_length - 1:middle_length+1]

    return s[middle_length]