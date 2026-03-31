def get_bingo_letter(n):
    
    if 1 <= n <= 15:
        return "B"
    elif 16 <= n <= 30:
        return "I"
    elif 31 <= n <= 45:
        return "N"
    elif 46 <= n <= 60:
        return "G"
    elif 61 <= n <= 75:
        return "O"
    else:
        return "Error"