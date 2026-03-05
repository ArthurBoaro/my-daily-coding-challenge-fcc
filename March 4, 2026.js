function cardValues(cards) {

  let arr = [];

  for (let card of cards) {
    if(card.includes("A")) {
      arr.push(1);
    } else if (/[JQK]/.test(card)) {
      arr.push(10);
    } else {
      arr.push(parseInt(card.slice(0, -1)));
    }
  }

  return arr;
}