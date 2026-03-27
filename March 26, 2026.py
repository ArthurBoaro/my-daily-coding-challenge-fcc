def get_movie_night_cost(day, showtime, number_of_tickets):

    weekend = ["Friday", "Saturday", "Sunday"]
    weekday = ["Monday", "Wednesday", "Thursday"]
    [h, m] = showtime.split(":")
    hour = int(h)
    minute = int(m[:2])
    period = m[2:]


    if period == "pm" and hour != 12:
        hour += 12

    total_minutes = (hour * 60) + minute

    if day == "Tuesday":
        total_cost = number_of_tickets * 5
        return f"${total_cost}.00"

    if day in weekend:
        total_cost = number_of_tickets * 12

    if day in weekday:
        total_cost = number_of_tickets * 10

    if total_minutes <= (17 * 60):
            total_cost -= number_of_tickets * 2

    return f"${total_cost}.00"