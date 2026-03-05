def is_valid_trick(trick_name):
    valid_first_words = ["Misty", "Ghost", "Thunder", "Solar", "Sky", "Phantom", "Frozen",  "Polar"]

    valid_second_words = ["Twister", "Icequake", "Avalanche","Vortex", "Snowstorm", "Frostbite","Blizzard", "Shadow"]

    arr = trick_name.split(" ")

    if arr[0] in valid_first_words and arr[1] in valid_second_words:
        return True

    return False