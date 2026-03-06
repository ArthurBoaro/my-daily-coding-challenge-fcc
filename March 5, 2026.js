function smallestGap(str) {

  let lastSeen = {};
  let result = {};
  let minDistance = 100000000000;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (lastSeen[char] !== undefined) {
      let distance = i - lastSeen[char];

      if (distance < minDistance) {
        minDistance = distance;
        result = {
          minChar: char,
          positions: [lastSeen[char], i],
          distance: distance
        };
      }
    }

    lastSeen[char] = i;
  }

  return str.slice(result.positions[0] + 1, result.positions[1]);
}