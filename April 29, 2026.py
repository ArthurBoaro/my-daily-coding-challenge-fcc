def parse_url_query(url):

    obj = {}
    string = url.split("?")
    pairs = string[1].split("&")

    for pair in pairs:
        key, value = pair.split("=")
        obj[key] = value

    return obj