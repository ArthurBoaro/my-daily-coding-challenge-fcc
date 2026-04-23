def get_cleanup_score(items):
    items_list = {
        "bottle": {"base_value": 10},
        "can": {"base_value": 6},
        "bag": {"base_value": 8},
        "tire": {"base_value": 35},
        "straw": {"base_value": 4},
        "cardboard": {"base_value": 3},
        "newspaper": {"base_value": 3},
        "shoe": {"base_value": 12},
        "electronics": {"base_value": 25},
        "battery": {"base_value": 18},
        "mattress": {"base_value": 38}
    }

    total = 0
    streak = 0
    item_count = 0
    last_item = ""

    for item in items:
        item_count += 1
        points = 0

        if isinstance(item, list) and item[0] == "rare":
            points = item[1]

            if item_count % 5 == 0:
                points *= (item_count // 5) + 1

            streak = 0
            last_item = ""
            total += points
            continue

        item_value = items_list[item]["base_value"]
        points = item_value

        if item == last_item:
            streak += 1
        else:
            streak = 0

        points = item_value + streak

        if item_count % 5 == 0:
            points *= (item_count // 5) + 1

        last_item = item
        total += points

    return total