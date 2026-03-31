function oddOrEvenDay(timestamp) {

  const date = new Date(timestamp)

  return date.getUTCDate() % 2 == 0 ? "even" : "odd";
}