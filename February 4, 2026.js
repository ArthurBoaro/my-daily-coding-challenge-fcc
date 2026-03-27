function truncateText(text) {

  if (text.length > 20) {
    const newText = text.slice(0, 17) + "...";
    return newText
  }

  return text;
}