function getElementSize(windowSize, elementVw, elementVh) {

  const size = windowSize.split(" x ");
  const vw = parseInt(elementVw);
  const vh = parseInt(elementVh);
  const resultW = size[0] * (vw / 100);
  const resultH = size[1] * (vh / 100);

  return `${resultW} x ${resultH}`;
}