def parse_inline_code(markdown):

    new_markdown = ""
    close_tag = False

    for char in markdown:
        if char == "`":
            if close_tag:
                new_markdown += "</code>"
            else:
                new_markdown += "<code>"
            close_tag = not close_tag
        else:
            new_markdown += char

    return new_markdown