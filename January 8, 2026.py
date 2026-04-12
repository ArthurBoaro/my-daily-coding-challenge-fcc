def is_sorted(arr):

    asc = True
    desc = True

    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            asc = False
        elif arr[i] < arr[i + 1]:
            desc = False

    if asc:
        return "Ascending"
    elif desc:
        return "Descending"

    return "Not sorted"