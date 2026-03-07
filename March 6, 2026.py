def navigate_trail(map):

    directions = [
        (0, 1, "R"),
        (1, 0, "D"),
        (0, -1, "L"),
        (-1, 0, "U")
    ]
    result = ""
    start = None
    visited = set()

    for i in range(len(map)):
        for j in range(len(map[i])):
            if map[i][j] == "C":
                start = (i, j)

    x, y = start

    while True:

        visited.add((x, y))

        for dx, dy, move in directions:

            nx = x + dx
            ny = y + dy

            if (
                0 <= nx < len(map) and
                0 <= ny < len(map[nx]) and
                (nx, ny) not in visited
            ):

                if map[nx][ny] == "T" or map[nx][ny] == "G":

                    result += move

                    if map[nx][ny] == "G":
                        return result

                    x, y = nx, ny
                    break