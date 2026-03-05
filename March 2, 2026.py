def sum_letters(s):

    sum = 0
    
    for char in s.lower():
        if char.isalpha():
            sum += ord(char) - 96

    return sum