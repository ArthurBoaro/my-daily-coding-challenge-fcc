def get_initials(name):

    names = name.split(" ")
    name_initials = ""
    
    for name in names:
        name_initials += name[0] + "."

    return name_initials