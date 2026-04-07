from datetime import datetime

def get_day_of_week(timestamp):

    date = datetime.utcfromtimestamp(timestamp / 1000)

    return date.strftime("%A")