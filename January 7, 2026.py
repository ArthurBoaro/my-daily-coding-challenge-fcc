def parse_unordered_list(markdown):

    items_list = markdown.split("\n") 

    html_tag = "<ul>"
    for item in items_list:
        html_tag += "<li>" + item.lstrip("- ") + "</li>"
    html_tag += "</ul>"
    
    return html_tag

parse_unordered_list("- Item A\n- Item B")