from datetime import datetime

def odd_or_even_day(timestamp):

    date = datetime.utcfromtimestamp(timestamp / 1000)
    day = date.day

    return "even" if day % 2 == 0 else "odd"