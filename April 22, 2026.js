function getCleanupScore(items) {

  const itemsList = {
    bottle: { baseValue: 10 },
    can: { baseValue: 6 },
    bag: { baseValue: 8 },
    tire: { baseValue: 35 },
    straw: { baseValue: 4 },
    cardboard: { baseValue: 3 },
    newspaper: { baseValue: 3 },
    shoe: { baseValue: 12 },
    electronics: { baseValue: 25 },
    battery: { baseValue: 18 },
    mattress: { baseValue: 38 }
  };

  let total = 0;
  let streak = 0;
  let itemCount = 0;
  let lastItem = "";

  for (let item of items) {

    itemCount += 1;
    let points = 0;

    if (Array.isArray(item) && item[0] == "rare") {
      points = item[1];

      if (itemCount % 5 == 0) {
        points *= (itemCount / 5) + 1;
      }

      streak = 0;
      lastItem = "";
      total += points;
      continue;
    }

    let itemValue = itemsList[item].baseValue;
    points = itemValue;

    if (item == lastItem) {
      streak += 1;
    } else {
      streak = 0;
    }

    points = itemValue + streak;
    if (itemCount % 5 == 0) {
      points *= (itemCount / 5) + 1;
    }

    lastItem = item;
    total += points;
  }
  
  return total;
}