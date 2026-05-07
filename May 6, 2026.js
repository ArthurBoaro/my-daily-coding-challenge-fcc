function getAllergenFriendlyMeals(meals, allergens) {

  let safeMeals = [];

  for (let i = 0; i < meals.length; i++) {

    const allergic = allergens.some(a => meals[i][1].includes(a));
    if (!allergic) {
      safeMeals.push(meals[i][0]);
    }
    
  }

  return safeMeals;
}