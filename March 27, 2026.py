def truncate_text(s):

    width1 = "ilI"
    width2 = "fjrt"
    width3 = "abcdeghkmnopqrstuvwxyzJL"
    width4 = "ABCDEFGHKMNOPQRSTUVWXYZ"
    total_width = 0

    for i, char in enumerate(s):
        if char in width1:
            total_width += 1
        elif char in width2:
            total_width += 2
        elif char in width3:
            total_width += 3
        elif char in width4:
            total_width += 4
        elif char == ".":
            total_width += 1
        elif char == " ":
            total_width += 2

        if total_width > 47:
            truncated_s = s[:i] + "..."
            return truncated_s

    return s