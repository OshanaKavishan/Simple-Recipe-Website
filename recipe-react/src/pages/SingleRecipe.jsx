import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from '../data/recipes';

function SingleRecipe() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <main className="page">
      <section className="recipe-detail">
        <img src={recipe.image} alt={recipe.name} className="img recipe-img" />
        <h2>{recipe.name}</h2>
        <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
        <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
        <p>{recipe.description}</p>
        <Link to="/" className="btn">Back Home</Link>
      </section>
    </main>
  );
}

export default SingleRecipe;
