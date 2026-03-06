function avalancheRisk(snowDepth, slope) {

  let m = 0;
  let n = 0;

  if(slope == "Gentle") m = 0;
  if(slope == "Steep") m = 1;
  if(slope == "Very Steep") m = 2;
  if(snowDepth == "Shallow") n = 0;
  if(snowDepth == "Moderate") n = 1;
  if(snowDepth == "Deep") n = 2;

  const matrixRisk = [
    [true, true, true],
    [true, false, false],
    [true, false, false]
  ];

  if(matrixRisk[m][n]) {
    return "Safe"
  }

  return "Risky"
}