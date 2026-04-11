function getNumberOfPlants(fieldSize, unit, crop) {

  let squareMeters = 0;
  let numberPlants = 0;

  if (unit == "acres") {
    squareMeters = fieldSize * 4046.86;
  } else {
    squareMeters = fieldSize * 10000;
  }

  if (crop == "corn") {
    numberPlants = Math.floor(squareMeters / 1);
  } else if (crop == "wheat") {
    numberPlants = Math.floor(squareMeters / 0.1);
  } else if (crop == "soybeans") {
    numberPlants = Math.floor(squareMeters / 0.5);
  } else if (crop == "tomatoes") {
    numberPlants = Math.floor(squareMeters / 0.25);
  } else if (crop == "lettuce") {
    numberPlants = Math.floor(squareMeters / 0.2);
  }

  return numberPlants;
}