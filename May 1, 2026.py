def group_anagrams(words):

    group = {}

    for word in words:
        key = "".join(sorted(word))
        group.setdefault(key, []).append(word)

    return list(group.values())