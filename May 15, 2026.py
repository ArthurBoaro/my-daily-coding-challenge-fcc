def format_coffee_order(order):
    menu = {
        "cold brew": 4.50,
        "oat latte": 5.00,
        "cappuccino": 4.75,
        "espresso": 3.00,
        "vanilla syrup": 0.75,
        "caramel drizzle": 0.60,
        "extra shot": 0.50,
        "oat milk": 0.75,
        "cream": 0.75
    }

    items = []
    total_price = 0

    word_list = (
        order
        .replace(".", "")
        .replace(",", "")
        .replace("!", "")
        .replace("?", "")
        .split(" ")
    )

    for i in range(len(word_list)):

        one_word = word_list[i]

        if i < len(word_list) - 1:
            two_words = f"{word_list[i]} {word_list[i + 1]}"
        else:
            two_words = word_list[i]

        if one_word in menu and one_word not in items:
            items.append(one_word)

        if two_words in menu and two_words not in items:
            items.append(two_words)

    ordered_items = []

    for item in menu:
        if item in items:
            ordered_items.append(item)
            total_price += menu[item]

    return f"{' + '.join(ordered_items)}: ${total_price:.2f}"