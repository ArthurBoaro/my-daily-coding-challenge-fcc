function parseUrlQuery(url) {

  let dict = {};
  let string = url.split("?");
  let pairs = string[1].split("&");

  for (let i = 0; i < pairs.length; i++) {
    const [key, value] = pairs[i].split("=");
    dict[key] = value;
  }

  return dict;
}