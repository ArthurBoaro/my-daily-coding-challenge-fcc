function getFastestSpeed(times) {

  const segments = [320, 280, 350, 300, 250];
  let speed = 0;
  let fastestSpeed = 0;
  let segment = 0

  for (let i = 0; i < times.length; i++) {

    speed = segments[i] / times[i];

    if (speed > fastestSpeed) {
      fastestSpeed = speed;
      segment = i + 1;
    }

  }

  fastestSpeed = Number(fastestSpeed.toFixed(2));

  return `The luger's fastest speed was ${fastestSpeed} m/s on segment ${segment}.`;
}