def calculate_penalty_distance(rounds):

    total_penalty = 0

    for target_hit in rounds:
        total_penalty +=  (5 - target_hit) * 150

    return total_penalty