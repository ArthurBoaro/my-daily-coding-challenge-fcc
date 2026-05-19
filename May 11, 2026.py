def get_oldest(people):

    max_age = max(person["age"] for person in people)
    oldest = [person["name"] for person in people if person["age"] == max_age]

    return oldest