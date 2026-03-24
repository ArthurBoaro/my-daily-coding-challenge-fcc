def get_relative_results(results):

    hour, minute, second = map(int, results[0].split(":"))
    winner_time = hour * 3600 + minute * 60 + second

    results_behind = ["0"]

    for i in range(1, len(results)):

        hour, minute, second = map(int, results[i].split(":"))
        total_time = hour * 3600 + minute * 60 + second

        time_behind = total_time - winner_time

        hour_behind_aux = time_behind // 3600
        hour_behind = str(time_behind // 3600).zfill(2)
        minute_behind = (time_behind % 3600) // 60
        second_behind = str(time_behind % 60).zfill(2)

        if hour_behind_aux > 0:
            results_behind.append(f"+{hour_behind}:{minute_behind}:{second_behind}")

        results_behind.append(f"+{minute_behind}:{second_behind}")

    return results_behind