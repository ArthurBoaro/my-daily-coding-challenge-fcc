def gets_free_shipping(cart, minimum):

    total_cost = 0

    items = {
    "shirt": 34.25,
    "jeans": 48.50,
    "shoes": 75.00,
    "hat": 19.95,
    "socks": 15.00,
    "jacket": 109.95
    }
    
    for item in cart:
        total_cost += items[item]

    return total_cost > minimum