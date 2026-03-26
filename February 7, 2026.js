function getLandingStance(startStance, rotation) {

  let stance = startStance == "Regular" ? true : false;
  stance = (Math.floor(Math.abs(rotation / 180)) % 2) ? !stance : stance;

  return stance ? "Regular" : "Goofy";
}