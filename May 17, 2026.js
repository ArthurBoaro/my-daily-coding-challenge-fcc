function mongoIdToDate(id) {

  const hex = id.slice(0, 8);
  const decimal = parseInt(hex, 16);
  const date = new Date(decimal * 1000);

  return date.toISOString();
}