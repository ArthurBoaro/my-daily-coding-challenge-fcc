function dfs(currentChain, availableDominoes, longestChain) {

  if (currentChain.length > longestChain.chain.length) {
    longestChain.chain = [...currentChain];
  }

  const lastDomino = currentChain[currentChain.length - 1];
  const lastValue = lastDomino[1];

  for (let i = 0; i < availableDominoes.length; i++) {

    const current = availableDominoes[i];
    const nextAvailable = [...availableDominoes];
    nextAvailable.splice(i, 1);

    if (lastValue === current[0]) {

      dfs([...currentChain, current], nextAvailable, longestChain);
    }

    else if (lastValue === current[1]) {

      dfs([...currentChain, [current[1], current[0]]], nextAvailable, longestChain);
    }
  }
}


function getLongestChain(dominoes) {

  const longestChain = { chain: [] };

  for (let i = 0; i < dominoes.length; i++) {

    const availableDominoes = [...dominoes];
    const start = availableDominoes.splice(i, 1)[0];

    dfs([start], availableDominoes, longestChain);

    dfs([[start[1], start[0]]],availableDominoes, 
longestChain);
  }

  return longestChain.chain;
}