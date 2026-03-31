def flatten(arr):
    new_arr = []

    for item in arr:
        if isinstance(item, list):
            new_arr.extend(flatten(item))
        else:
            new_arr.append(item)

    return new_arr