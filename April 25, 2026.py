def decompress(s):

    word_list = []
    new_s = {}
    result = []

    for word in s.split(" "):
        if word.isdigit():
            index = int(word) - 1
            found = word_list[index]
            result.append(found)
            word_list.append(found)
        else:
            word_list.append(word)
            result.append(word)

    new_s = " ".join(result)

    return new_s