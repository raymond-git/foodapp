import { useState } from 'react';

const AddRecipe = () => {

    const [recipeDetails, setRecipeDetails] = useState({ recipeName: "", recipeDescription: "", recipeImage: "", recipeIngredients: "" });

    function handleSubmit(e) {
        e.preventDefault();
        const recipe = recipeDetails;
        console.log(recipe);
        fetch('http://localhost:5173/addrecipe', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipe)
        }).then(() => {
            console.log("Added Recipe");
        })
    }
    return (
        <div>
            <h1>Add Recipe</h1>
            <form>
                <label>Recipe Name</label>
                <input className='border-2 mt-2' type="text" value={recipeDetails.recipeName} onChange={(e) => setRecipeDetails({ ...recipeDetails, recipeName: e.target.value })}></input>
                <label>Recipe Description</label>
                <input className='border-2 mt-2' type="text" value={recipeDetails.recipeDescription} onChange={(e) => setRecipeDetails({ ...recipeDetails, recipeDescription: e.target.value })}></input>
                <label>Recipe Image</label>
                <input className='border-2 mt-2' type="text" value={recipeDetails.recipeImage} onChange={(e) => setRecipeDetails({ ...recipeDetails, recipeImage: e.target.value })}></input>
                <label>Recipe Ingredients</label>
                <input className='border-2 mt-2' type="text" value={recipeDetails.recipeIngredients} onChange={(e) => setRecipeDetails({ ...recipeDetails, recipeIngredients: e.target.value })}></input>
            </form>
            <button onClick={handleSubmit} className='border-2 mt-4 p-2 bg-blue-500 text-white'>Add Recipe</button>

        </div>
    )
}

export default AddRecipe;