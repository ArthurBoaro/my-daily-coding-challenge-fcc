def get_milestone(years):

    milestones = [
        (70, "Platinum"),
        (60, "Diamond"),
        (50, "Gold"),
        (40, "Ruby"),
        (25, "Silver"),
        (10, "Tin"),
        (5, "Wood"),
        (1, "Paper"),
    ]

    for y, name in milestones:
        if years >= y:
            return name

    return "Newlyweds"