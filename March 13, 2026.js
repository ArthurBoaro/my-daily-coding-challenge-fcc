function calculateParkingFee(parkTime, pickupTime) {

  const parkTimeMinutes = parseInt(parkTime.slice(0, 2)) * 60 + parseInt(parkTime.slice(3));
  const pickupTimeMinutes = parseInt(pickupTime.slice(0, 2)) * 60 + parseInt(pickupTime.slice(3));
  let totalTimeMinutes = pickupTimeMinutes - parkTimeMinutes;
  let totalPrice = 0;
  let overnightFee = 0;

  if (totalTimeMinutes < 0) {
    totalTimeMinutes = (1440 - parkTimeMinutes) + pickupTimeMinutes;
    overnightFee = 10;
  }

  if (totalTimeMinutes < 60) {
    totalPrice = 5;
    return `$${totalPrice}`
  }

  totalPrice = (Math.ceil(totalTimeMinutes / 60) * 3) + overnightFee;
  console.log(`$${totalPrice}`)

  return `$${totalPrice}`;
}