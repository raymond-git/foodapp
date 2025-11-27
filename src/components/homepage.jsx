// Open the Simple Browser in VS Code
// Press Ctrl+Shift+P to open the Command Palette.
// Type and select Simple Browser: Show.
// Navigate to Your Localhost URL
// In the Simple Browser panel that appears, type: http://localhost:5173/

import RecipeCardTiles from "./recipeCardTitles.jsx";
import Navbar from "./navbar.jsx";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    let allMeals = [];

    Promise.all(
      letters.map((letter) =>
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.meals) allMeals = [...allMeals, ...data.meals];
          })
      )
    ).then(() => setRecipes(allMeals));
  }, []);

  return (
    <div>
      <Navbar />

      <div className="mx-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((meal) => (
          <RecipeCardTiles
            key={meal.idMeal}
            image={meal.strMealThumb}
            title={meal.strMeal}
            description={meal.strInstructions.substring(0, 100) + "..."}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;