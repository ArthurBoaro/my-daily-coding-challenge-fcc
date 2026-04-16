def sort_and_swap(arr):

    new_arr = sorted(arr)
    for i in range(len(new_arr)):
        if i % 3 == 0 and i + 1 <= len(new_arr) and i != 0:
            aux = new_arr[i]
            new_arr[i] = new_arr[i-1]
            new_arr[i-1] = aux

    return new_arr