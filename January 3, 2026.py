def find_left_handed_seats(table):

    seats = 0
    top_seats = table[0]
    bottom_seats = table[1]

    for i in range(len(top_seats)):
        if top_seats[i] == "U" and (i + 1 >= len(top_seats) or top_seats[i+1] != "R"):
            seats += 1
    
    for i in range(len(bottom_seats) - 1, -1, -1):
        if bottom_seats[i] == "U" and (i - 1 < 0 or bottom_seats[i - 1] != "R"):
            seats += 1

    return seats