def can_donate(donor, recipient):
    if ("+" in donor) and ("-" in recipient):
        return False
    
    if ("AB" in donor) and not("AB" in recipient):
        return False
    
    if ("B" in donor) and not(("B" in recipient) or ("AB" in recipient)):
        return False

    if ("A" in donor) and not(("A" in recipient) or ("AB" in recipient)):
        return False
    
    return True