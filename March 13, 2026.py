import math

def calculate_parking_fee(park_time, pickup_time):

    park_time_minutes = int(park_time[:2]) * 60 + int(park_time[3:])
    pickup_time_minutes = int(pickup_time[:2]) * 60 + int(pickup_time[3:])
    total_time_minutes = pickup_time_minutes - park_time_minutes
    total_price = 0
    overnight_fee = 0

    if total_time_minutes < 0:
        total_time_minutes = (1440 - park_time_minutes) + pickup_time_minutes
        overnight_fee = 10
    
    if total_time_minutes < 60:
        total_price = 5
        return f"${total_price}"

    total_price = (math.ceil(total_time_minutes / 60) * 3) + overnight_fee

    return f"${total_price}"