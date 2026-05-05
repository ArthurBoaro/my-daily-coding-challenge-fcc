def get_deepest_brackets(s):

    current = ""
    result = ""
    count = 0
    max_count = 0

    for char in s:
        if char == "(" or char == "[" or char == "{":
            count += 1
            if count > max_count:
                max_count = count
                current = ""
            continue
        
        if char == ")" or char == "]" or char == "}":
            if count == max_count:
                result = current
            count -= 1
            continue
        
        if count == max_count:
            current += char

    return result