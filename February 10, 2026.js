function getRelativeResults(results) {

  let [hour, minute, second] = results[0].split(":").map(Number);
  let winnerTime = hour * 3600 + minute * 60 + second;
  let resultsBehind = ["0"];


  for (let i = 1; i < results.length; i++) {

    [hour, minute, second] = results[i].split(":").map(Number);
    let totalTime = hour * 3600 + minute * 60 + second;
    let timeBehind = totalTime - winnerTime;
    let hourBehindAux = Math.floor(timeBehind / 3600);
    let hourBehind = String(Math.floor(timeBehind / 3600)).padStart(2, "0");
    let minuteBehind = Math.floor((timeBehind % 3600) / 60);
    let secondBehind = String(timeBehind % 60).padStart(2, "0");

    if (hourBehindAux > 0) {
      resultsBehind.push(`+${hourBehind}:${minuteBehind}:${secondBehind}`);
    }

    resultsBehind.push(`+${minuteBehind}:${secondBehind}`)

  }

  return resultsBehind;
}