def count_change(change):

    total = sum(change)
    dollar = total // 100
    cents = total % 100

    return f"${dollar}.{str(cents).zfill(2)}"