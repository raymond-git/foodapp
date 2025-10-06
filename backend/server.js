import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.post('/addrecipe', (req, res) => {
    const { recipeName, recipeDescription, recipeImage, recipeIngredients } = req.body;
    console.log('📋 New recipe added:', { recipeName, recipeDescription, recipeImage, recipeIngredients });
    res.status(200).json({ message: 'Recipe saved!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
