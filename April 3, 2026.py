def get_browser_history(commands):
    history = []
    current = -1

    for command in commands:
        if command == "Back":
            if current > 0:
                current -= 1

        elif command == "Forward":
            if current < len(history) - 1:
                current += 1

        else:
            history = history[:current + 1]
            history.append(command)
            current += 1

    return [history, current]