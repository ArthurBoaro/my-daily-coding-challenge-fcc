def compute_score(judge_scores, *penalties):

    scores = judge_scores

    scores.remove(max(scores))
    scores.remove(min(scores))

    total_score = sum(scores) - sum(penalties)

    return total_score