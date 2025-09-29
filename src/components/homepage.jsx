// Open the Simple Browser in VS Code
// Press Ctrl+Shift+P to open the Command Palette.
// Type and select Simple Browser: Show.
// Navigate to Your Localhost URL
// In the Simple Browser panel that appears, type: http://localhost:5173/

import RecipeCardTiles from "./recipeCardTitles.jsx";
import Navbar from "./navbar.jsx";


const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-14 ">
        <div>
          <div className="p-10 flex justify-center">
            <RecipeCardTiles
              image="/koreanFriedChicken.png"
              title="Korean Fried Chicken"
              description="Spicy Chicken" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;