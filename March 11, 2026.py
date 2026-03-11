def convert_words(s):

    content = [x.strip() for x in s.split(" ")]
    arr = []

    for item in content:
        arr.append(str(len(item)))

    return " ".join(arr)