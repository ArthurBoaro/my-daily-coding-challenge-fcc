def passing_count(scores, passing_score):

    students_passed = 0

    for score in scores:
        if score >= passing_score:
            students_passed += 1

    return students_passed