function parseInlineCode(markdown) {

  let newMarkdown = "";
  let close_tag = false;

  for (let char of markdown) {
    if (char == "`") {
      if (close_tag) {
        newMarkdown += "</code>"
      } else {
        newMarkdown += "<code>"
      }
      close_tag = !close_tag
    } else {
      newMarkdown += char
    }
  }

  return newMarkdown;
}