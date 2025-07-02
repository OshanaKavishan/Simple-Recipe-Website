import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from '../data/recipes';

function Tags() {
    //   const { tag } = useParams();

    //   // Filter recipes by tag (case-insensitive)
    //   const filteredRecipes = recipes.filter(
    //     recipe => recipe.tag.toLowerCase() === tag.toLowerCase()
    //   );
    const { tag } = useParams();

    const filteredRecipes = recipes.filter(
        recipe => recipe.tag.toLowerCase() === tag.toLowerCase()
    );


    // Capitalize tag for display
    const displayTag = tag.charAt(0).toUpperCase() + tag.slice(1);

    if (filteredRecipes.length === 0) {
        return (
            <main className="page">
                <h2>No recipes found for "{displayTag}"</h2>
                <Link to="/">Back to Home</Link>
            </main>
        );
    }

    return (
        <main className="page">
            <h2>Recipes for "{displayTag}"</h2>
            <div className="recipes-list">
                {filteredRecipes.map(recipe => (
                    <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="recipe">
                        <img src={recipe.image} className="img recipe-img" alt={recipe.name} />
                        <h5>{recipe.name}</h5>
                        <p>Prep: {recipe.prepTime} | Cook: {recipe.cookTime}</p>
                    </Link>
                ))}
            </div>
            <Link to="/" style={{ display: 'block', marginTop: '2rem' }}>Back to Home</Link>
        </main>
    );
}

export default Tags;