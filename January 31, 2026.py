from datetime import datetime

zodiac_table = [
    {"start": (3, 21), "end": (4, 19), "sign": "Aries"},
    {"start": (4, 20), "end": (5, 20), "sign": "Taurus"},
    {"start": (5, 21), "end": (6, 20), "sign": "Gemini"},
    {"start": (6, 21), "end": (7, 22), "sign": "Cancer"},
    {"start": (7, 23), "end": (8, 22), "sign": "Leo"},
    {"start": (8, 23), "end": (9, 22), "sign": "Virgo"},
    {"start": (9, 23), "end": (10, 22), "sign": "Libra"},
    {"start": (10, 23), "end": (11, 21), "sign": "Scorpio"},
    {"start": (11, 22), "end": (12, 21), "sign": "Sagittarius"},
    {"start": (12, 22), "end": (1, 19), "sign": "Capricorn"},
    {"start": (1, 20), "end": (2, 18), "sign": "Aquarius"},
    {"start": (2, 19), "end": (3, 20), "sign": "Pisces"},
]

def get_zodiac(date_string):
    
    date_object = datetime.strptime(date_string, "%Y-%m-%d")
    month = date_object.month
    day = date_object.day

    for zodiac in zodiac_table:
        start_month, start_day = zodiac["start"]
        end_month, end_day = zodiac["end"]
        sign_name = zodiac["sign"]

        if start_month <= end_month:
            if (
                (month == start_month and day >= start_day) or
                (month == end_month and day <= end_day) or
                (start_month < month < end_month)
            ):
                return sign_name
        else:
            if (
                (month == start_month and day >= start_day) or
                (month == end_month and day <= end_day) or
                (month > start_month or month < end_month)
            ):
                return sign_name