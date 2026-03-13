function isValidDominoChain(dominoes) {

  const isNotDomino = dominoes.some(pair => pair.some(n => n < 1 || n > 6));

  if(isNotDomino) {
    return false
  }

  for (let i = 0; i < dominoes.length -1; i++) {
    if(dominoes[i][1] != dominoes[i+1][0]) {
      return false
    }
  }

  return true;
}