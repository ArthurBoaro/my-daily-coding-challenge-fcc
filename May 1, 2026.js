function groupAnagrams(words) {

  let group = {};

  for (let word of words) {
    const key = word.split("").sort().join("");

    if (!group[key]) {
      group[key] = [];
    }

    group[key].push(word);
  }

  return Object.values(group);
}