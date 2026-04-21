def find_org(acronym):

    names = ["National Avocado Storage Authority", "Cats Infiltration Agency", "Fluffy Beanbag Inspectors", "Department Of Jelly", "Wild Honey Organization", "Eating Pancakes Administration"];

    for name in names:
        first_letters = "".join(word[0] for word in name.split())
        print(first_letters)
        if first_letters == acronym:
            return name

    return "Not Found"