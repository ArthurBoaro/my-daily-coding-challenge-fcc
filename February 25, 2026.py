def find_differences(arr):
    result_arr = []
    for i in range (len(arr) - 1):
        result_arr.append(arr[i +1] -arr[i])

    result_arr.append(0)

    return result_arr