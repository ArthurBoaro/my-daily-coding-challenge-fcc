function tireStatus(pressuresPSI, rangeBar) {

  const tiresStatus = [];
  const rangePSI = [rangeBar[0] * 14.5038, rangeBar[1] * 14.5038];
  
  for (let tire of pressuresPSI) {
    if (tire > rangePSI[1]) {
      tiresStatus.push("High");
    } else if (tire > rangePSI[0]) {
      tiresStatus.push("Good");
    } else {
      tiresStatus.push("Low");
    }
  }

  return tiresStatus;
}