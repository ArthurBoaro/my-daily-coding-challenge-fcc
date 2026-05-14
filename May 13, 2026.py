def find_offender(arr):

    index = 0

    for i in range(len(arr)):
        if arr[i] > arr[i+1]:
            if i == 0 or arr[i-1] <= arr[i+1]:
                index = i;
                break;
            index = i + 1;
            break;

    return index