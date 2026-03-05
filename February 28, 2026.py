import re

def add_punctuation(sentences):
    arr = list(sentences)
    regex_upper = re.compile(r'^[A-Z]$')

    i = 0
    while i < len(arr):
        if i > 0 and arr[i - 1] == " " and regex_upper.match(arr[i]):
            arr.insert(i - 1, ".")
            i += 1
        i += 1

    if not sentences.endswith("."):
        arr.append(".")

    return "".join(arr)