def truncate_text(text):

    if len(text) > 20:
        newText = text[:17] + "..."
        return newText

    return text