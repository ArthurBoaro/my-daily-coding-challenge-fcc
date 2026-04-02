def fix_prank_number(arr):

    first_difference = arr[1] - arr[0]
    second_difference = arr[2] - arr[1]
    third_difference = arr[3] - arr[2]

    difference = sorted([first_difference, second_difference, third_difference])[1]

    for i in range(1, len(arr)):
        if arr[i] - arr[i - 1] != difference:
            if (i + 1 <len(arr)) and (arr[i + 1] - arr[i] == difference):
                arr[i - 1] = arr[i] - difference
            else:
                arr[i] = arr[i - 1] + difference
            break

    return arr