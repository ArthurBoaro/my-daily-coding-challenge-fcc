function truncateText(str) {

  const width1 = "ilI";
  const width2 = "fjrt";
  const width3 = "abcdeghkmnopqrstuvwxyzJL";
  const width4 = "ABCDEFGHKMNOPQRSTUVWXYZ";
  let totalWidth = 0;
  let truncatedStr = "";

  for (let i = 0; i < str.length; i++) {

    if (width1.includes(str[i])) {
      totalWidth += 1;
    } else if (width2.includes(str[i])) {
      totalWidth += 2;
    } else if (width3.includes(str[i])) {
      totalWidth += 3;
    } else if (width4.includes(str[i])) {
      totalWidth += 4;
    } else if (str[i] === ".") {
      totalWidth += 1;
    } else if (str[i] === " ") {
      totalWidth += 2;
    }

    if (totalWidth > 47) {
      truncatedStr = str.slice(0, i) + "..."
      return truncatedStr;
    }

  }

  return str;
}