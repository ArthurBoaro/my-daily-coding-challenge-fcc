import re

def parse_italics(markdown):
    pattern = r'(\*|_)(\S.*?\S)\1'

    if re.search(pattern, markdown):
        html = re.sub(pattern, r'<i>\2</i>', markdown)
        return html

    return markdown