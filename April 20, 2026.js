function findOrg(acronym) {

  const list = ["National Avocado Storage Authority", "Cats Infiltration Agency", "Fluffy Beanbag Inspectors", "Department Of Jelly", "Wild Honey Organization", "Eating Pancakes Administration"];

  for (let name of list) {
    
    let firstLetters = name.split(" ").map(name => name[0]).join("");
    if (firstLetters == acronym) {
      return name
    }
  }

  return "Not Found";
}