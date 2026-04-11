import math

def get_number_of_plants(field_size, unit, crop):

    square_meters = 0
    number_plants = 0

    if unit == "acres":
        square_meters = field_size * 4046.86
    else:
        square_meters = field_size * 10000 

    if crop == "corn":
        number_plants = math.floor(square_meters / 1)
    elif crop == "wheat":
        number_plants = math.floor(square_meters / 0.1)
    elif crop == "soybeans":
        number_plants = math.floor(square_meters / 0.5)
    elif crop == "tomatoes":
        number_plants = math.floor(square_meters / 0.25)
    elif crop == "lettuce":
        number_plants = math.floor(square_meters / 0.2)
    
    return number_plants