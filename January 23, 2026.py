import re

def is_valid_hex(s):

    regex_css_hex_color = r"^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$"

    return bool(re.match(regex_css_hex_color, s))