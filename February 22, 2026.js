function medalTable(results) {
  const medals = {};

  for (const [gold, silver, bronze] of results) {
    if (!medals[gold]) medals[gold] = { gold: 0, silver: 0, bronze: 0, total: 0 };
    if (!medals[silver]) medals[silver] = { gold: 0, silver: 0, bronze: 0, total: 0 };
    if (!medals[bronze]) medals[bronze] = { gold: 0, silver: 0, bronze: 0, total: 0 };

    medals[gold].gold++;
    medals[gold].total++;

    medals[silver].silver++;
    medals[silver].total++;

    medals[bronze].bronze++;
    medals[bronze].total++;
  }

  const sortedCountries = Object.keys(medals).sort((a, b) => {
    if (medals[b].gold !== medals[a].gold) {
      return medals[b].gold - medals[a].gold;
    }
    return a.localeCompare(b);
  });

  
  let csv = "Country,Gold,Silver,Bronze,Total";

  for (const country of sortedCountries) {
    const m = medals[country];
    csv += `\n${country},${m.gold},${m.silver},${m.bronze},${m.total}`;
  }

  return csv;
}