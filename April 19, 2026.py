def get_unique_climbs(steps):
    
    fibonnaci = 0
    n0 = 0
    n1 = 1

    for _ in range(0, steps):
        fibonnaci = n1 + n0

        n0 = n1
        n1 = fibonnaci

    return fibonnaci