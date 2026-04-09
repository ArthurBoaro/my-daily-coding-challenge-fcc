function getsFreeShipping(cart, minimum) {

  let totalCost = 0;

  const items = {
    "shirt": 34.25,
    "jeans": 48.50,
    "shoes": 75.00,
    "hat": 19.95,
    "socks": 15.00,
    "jacket": 109.95
    };

  for (let item of cart) {
    totalCost += items[item];
  }

  return totalCost > minimum;
}