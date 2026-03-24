def detect_roast(beans):

    lightBeans = 0
    mediumBeans = 0
    darkBeans = 0
    numberBeans = len(beans)

    for bean in beans:
        if bean == "'":
            lightBeans += 1
        elif bean == "-":
            mediumBeans += 1
        elif bean == ".":
            darkBeans += 1

    total = ((lightBeans * 1) / numberBeans) + ((mediumBeans * 2) / numberBeans) + ((darkBeans * 3) / numberBeans)

    if total > 2.5:
        return "Dark"
    elif total >= 1.75:
        return "Medium"

    return "Light"