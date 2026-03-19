def get_semifinal_matchups(teams):

    table = []
    points = [3, 2, 1, 0]
    
    for team in teams:

        team_name = team.split(":")[0]
        team_records_numbers = list(map(int, team.split(": ")[1].split("-")))
        team_points = sum([n * p for n, p in zip(team_records_numbers, points)])
        table.append((team_name, team_points))

    table.sort(key=lambda x: x[1], reverse=True)

    return f"The semi-final games will be {table[0][0]} vs {table[3][0]} and {table[1][0]} vs {table[2][0]}."

get_semifinal_matchups(["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"])