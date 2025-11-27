import { useLocation } from "react-router-dom";
import RecipeCardTiles from "./recipeCardTitles.jsx";

const Success = () => {
const { state } = useLocation();

    return (
        <div>
            <h1>🎉 Recipe added successfully!</h1>
           
          {state.recipe.recipeName}

          
        </div>
    );
};

export default Success;
