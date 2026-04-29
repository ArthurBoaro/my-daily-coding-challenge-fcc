def explode_fizzbuzz(target_z_count):

    fizzbuzz_str = "fizzbuzz"
    steps = 0

    while fizzbuzz_str.count("z") < target_z_count:
        new_str = ""

        for i in range(1, len(fizzbuzz_str) + 1):
            if i % 3 == 0 and i % 5 == 0:
                new_str += "fizzbuzz"
            elif i % 3 == 0:
                new_str += "fizz"
            elif i % 5 == 0:
                new_str += "buzz"
            else:
                new_str += fizzbuzz_str[i - 1]
        
        steps += 1
        fizzbuzz_str = new_str

    return steps