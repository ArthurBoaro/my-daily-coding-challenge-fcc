def do_math(s):

    last_number = None
    number = ""
    char_count = 0
    result = 0
    start = False

    for char in s:
        if char.isdigit():
            number += char
            start = True
        else:
            if number != "":
                num = int(number)
                if last_number == None:
                    result = num
                else:
                    if char_count % 2 == 0:
                        result += num
                    else:
                        result -= num
            
                last_number = num;
                number = ""
                char_count = 0
            
            if start:
                char_count += 1

    if number != "":
        num = int(number)
        if last_number == None:
            result = num
        else:
            if char_count % 2 == 0:
                    result += num
            else:
                result -= num

    return result

do_math("3ab10c8")