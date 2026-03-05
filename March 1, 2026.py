def is_flat(arr):

    return all(not isinstance(item, list) for item in arr)