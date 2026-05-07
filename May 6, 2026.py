def get_allergen_friendly_meals(meals, allergens):

    safe_meals = []

    for meal_name, meal_allergens in meals:
        if not any(allergen in meal_allergens for allergen in allergens):
            safe_meals.append(meal_name)

    return safe_meals