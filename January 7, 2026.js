function parseUnorderedList(markdown) {

  const itemsList = markdown.split("\n");
  let htmlTag = "<ul>";
  
  for (let item of itemsList) {
    htmlTag += "<li>" + item.replace(/^[- ]+/, "") + "</li>"
  }

  htmlTag += "</ul>";

  return htmlTag;
}