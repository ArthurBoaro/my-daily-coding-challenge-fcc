function parseLink(markdown) {

  const linkText = markdown.match(/\[(.*?)\]/)[1];
  const linkUrl = markdown.match(/\((.*?)\)/)[1];

  return `<a href="${linkUrl}">${linkText}</a>`;
}