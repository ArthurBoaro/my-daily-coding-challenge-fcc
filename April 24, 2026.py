def compress(s):

    words_list = {}
    new_s = ""
    result = []
    occurrence = 0

    for word in s.split(" "):
        occurrence += 1
        if word not in words_list:
            words_list[word] = occurrence
            result.append(word)
        else:
            result.append(str(words_list[word]))

    new_s = " ".join(result)

    return new_s