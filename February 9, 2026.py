def ski_jump_medal(distance_points, style_points, wind_comp, k_point_bonus):

    players_scores = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0]

    sorted_scores = sorted(players_scores, reverse=True)

    my_score = distance_points + style_points + wind_comp + k_point_bonus

    if my_score > sorted_scores[0]:
        return "Gold"
    elif my_score > sorted_scores[1]:
        return "Silver"
    elif my_score > sorted_scores[2]:
        return "Bronze"

    return "No Medal"