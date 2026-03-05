def score_curling(house):

    dist_r = []
    dist_y = []

    def get_ring(i, j):
        if i == 2 and j == 2:
            return 0

        if 1 <= i <= 3 and 1 <= j <= 3:
            return 1

        return 2

    for i in range(5):
        for j in range(5):

            if house[i][j] == "R":
                dist_r.append(get_ring(i, j))

            if house[i][j] == "Y":
                dist_y.append(get_ring(i, j))

    if len(dist_r) == 0 and len(dist_y) == 0:
        return "No points awarded"

    dist_r.sort()
    dist_y.sort()

    closest_r = dist_r[0] if dist_r else float("inf")
    closest_y = dist_y[0] if dist_y else float("inf")

    if closest_r == closest_y:
        return "No points awarded"

    if closest_r < closest_y:
        points = 0
        for d in dist_r:
            if d < closest_y:
                points += 1
            else:
                break
        return f"R: {points}"

    if closest_y < closest_r:
        points = 0
        for d in dist_y:
            if d < closest_r:
                points += 1
            else:
                break
        return f"Y: {points}"

    return "No points awarded"