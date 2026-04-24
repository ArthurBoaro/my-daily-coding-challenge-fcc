function parseItalics(markdown) {

  if (markdown.match(/(\*|_)\S.*?\S\1/g) !== null) {

    const html = markdown.replace(/(\*|_)(\S.*?\S)\1/g, "<i>$2</i>")
    return html;
  }

  return markdown;
}