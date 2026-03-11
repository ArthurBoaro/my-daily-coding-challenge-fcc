def is_valid_hsl(hsl):

    if not hsl.startswith("hsl(") or not hsl.endswith((")", ";")):
        return False

    content = hsl[hsl.find("(")+1 : hsl.rfind(")")]
    arr = [x.strip() for x in content.split(",")]

    if int(arr[0]) < 0 or int(arr[0]) > 360:
        return False

    if not arr[1].endswith("%") or not arr[2].endswith("%"):
        return False
    
    number_s = int(arr[1][:-1])
    number_l = int(arr[2][:-1])

    if number_s < 0 or number_s > 100:
        return False

    if number_l < 0 or number_l > 100:
        return False

    return True