def is_fizz_buzz(arr):

    first_n = 0
    for i in range(len(arr)):
        if isinstance(arr[i], int):
            first_n = arr[i] - i
            break

    for i in range(len(arr)):
        n = first_n + i
        if n % 3 == 0 and n % 5 == 0:
            if arr[i] != "FizzBuzz":
                return False
        elif n % 3 == 0:
            if arr[i] != "Fizz":
                return False
        elif n % 5 == 0:
            if arr[i] != "Buzz":
                return False
        
    return True