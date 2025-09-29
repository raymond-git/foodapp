// Open the Simple Browser in VS Code
// Press Ctrl+Shift+P to open the Command Palette.
// Type and select Simple Browser: Show.
// Navigate to Your Localhost URL
// In the Simple Browser panel that appears, type: http://localhost:5173/

import RecipeCardTiles from "./recipeCardTitles.jsx";


const Homepage = () => {
  return (
    <div className="border-4 mx-4">

      <div className="text-center">
        <input
          className="border-1"
          type="text"
          placeholder="Search Item">
        </input>

        <button className="border-1 ml-4">Search Recipe</button>
      </div>

      <RecipeCardTiles
        image="/koreanFriedChicken.png"
        title="Korean Fried Chicken"
        description="Spicy Chicken" />

    </div>

  );
};

export default Homepage;