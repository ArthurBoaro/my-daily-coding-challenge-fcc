function scaleImage(size, scale) {

  let [height, width] = size.split("x").map(Number);
  height *= scale;
  width *= scale;

  return `${height}x${width}`;
}