def avalanche_risk(snow_depth, slope):

    m = 0
    n = 0

    if(slope == "Gentle"): m = 0
    if(slope == "Steep"): m = 1
    if(slope == "Very Steep"): m = 2
    if(snow_depth == "Shallow"): n = 0
    if(snow_depth == "Moderate"): n = 1
    if(snow_depth == "Deep"): n = 2

    matrix_risk = [
        [True, True, True],
        [True, False, False],
        [True, False, False]
    ]

    if (matrix_risk[m][n]):
        return "Safe"

    return "Risky" 