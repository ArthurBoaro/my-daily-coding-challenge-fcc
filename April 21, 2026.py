def get_odd_words(s):

    words = s.split(" ")
    odd_words = []

    for word in words:
        if len(word) % 2 == 1:
            odd_words.append(word)

    return " ".join(odd_words)