function detectRoast(beans) {

  let lightBeans = 0;
  let mediumBeans = 0;
  let darkBeans = 0;
  let numberBeans = beans.length;
  
  for (let i = 0; i < numberBeans; i++) {
    if (beans[i] == "'") {
      lightBeans += 1;
    } else if (beans[i] == "-") {
      mediumBeans += 1;
    } else if (beans[i] == ".") {
      darkBeans += 1;
    }
  }

  const total = ((lightBeans * 1) / numberBeans) + ((mediumBeans * 2) / numberBeans) + ((darkBeans * 3) / numberBeans)

  if (total > 2.5) {
    return "Dark"
  } else if (total >= 1.75) {
    return "Medium"
  }

  return "Light";
}