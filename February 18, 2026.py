import math

def calculate_start_delays(jump_scores):

    highest_score = max(jump_scores)
    result = []

    for score in jump_scores:
        result.append(math.ceil((highest_score - score) * 1.5))

    return result