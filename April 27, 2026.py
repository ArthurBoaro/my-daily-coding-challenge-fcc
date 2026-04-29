def get_word_score(word):

    score = 0

    for char in word:
        score += ord(char.lower()) - ord('a') + 1

    return score