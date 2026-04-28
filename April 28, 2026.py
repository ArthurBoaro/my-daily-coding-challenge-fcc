def get_number_words(n):

    if n == 0:
        return "zero"
    
    unique_names = [
        "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen", "nineteen"
    ]

    units = [
        "", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"
    ]

    tens = [
        "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy", "eighty", "ninety"
    ]

    if n > 0 and n < 20:
        return unique_names[n - 1]

    number_str = ""

    if n > 20 and n < 100:
        decimal = n // 10
        unit = n % 10

        if unit > 0:
            number_str = tens[decimal - 2] + "-" + units[unit]
        else:
            number_str = tens[decimal - 2]

    return number_str