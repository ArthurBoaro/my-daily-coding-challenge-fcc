def find_sum(arr, target):

    n = len(arr)

    def backtrack(start, path, total):
        if total == target and len(path) >= 2:
            return path

        for i in range(start, n):
            res = backtrack(i + 1, path + [arr[i]], total + arr[i])
            if res:
                return res

        return None
    
    result = backtrack(0, [], 0)
    
    return result if result else "Sum not found"