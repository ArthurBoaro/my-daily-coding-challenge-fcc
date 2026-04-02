def get_average_grade(scores):

    average_score = sum(scores) / len(scores)

    if (average_score > 97):
        return "A+";
    elif (average_score > 93):
        return "A";
    elif (average_score > 90):
        return "A-";
    elif (average_score > 87):
        return "B+";
    elif (average_score > 83):
        return "B";
    elif (average_score > 80):
        return "B-";
    elif (average_score > 77):
        return "C+";
    elif (average_score > 73):
        return "C";
    elif (average_score > 70):
        return "C-";
    elif (average_score > 67):
        return "D+";
    elif (average_score > 63):
        return "D";
    elif (average_score > 60):
        return "D-";

    return "F"

