def count_medals(winners):

    medals = {}
    countries = []

    for gold, silver, bronze in winners:
        if gold not in medals:
            medals[gold] = [0, 0, 0]
        if silver not in medals:
            medals[silver] = [0, 0, 0]
        if bronze not in medals:
            medals[bronze] = [0, 0, 0]

        medals[gold][0] += 1
        medals[silver][1] += 1
        medals[bronze][2] += 1

    
    for country, (gold, silver, bronze) in medals.items():
        total = gold + silver + bronze
        countries.append((country, gold, silver, bronze, total))

    countries.sort(key=lambda x: (-x[1], x[0]))

    lines = ["Country,Gold,Silver,Bronze,Total"]
    for country, gold, silver, bronze, total in countries:
        lines.append(f"{country},{gold},{silver},{bronze},{total}")

    return "\n".join(lines)