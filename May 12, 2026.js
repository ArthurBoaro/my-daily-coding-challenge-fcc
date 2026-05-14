function getFrequency(str) {

  const frequency = {};

  for (let char of str) {
    
    if (!(char in frequency)) {
      frequency[char] = 1;
    } else {
      frequency[char] += 1;
    }
  }

  return frequency;
}