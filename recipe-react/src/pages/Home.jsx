import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import recipes from '../data/recipes';

// Get unique tags from recipes
const uniqueTags = [...new Set(recipes.map(recipe => recipe.tag))];

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="page">
      <header className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>simply recipes</h1>
            <h4>easy and simple</h4>
          </div>
        </div>
      </header>

              {/* Search input */}
        <div style={{ margin: '1rem 0' }}>
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

      <section className="recipes-container">
        <div className="tags-container">
          <h4>recipes</h4>
          <div className="tags-list">
            {uniqueTags.map(tag => (
              <Link key={tag} to={`/tags/${tag}`}>{tag}</Link>
            ))}
          </div>
        </div>

        <div className="recipes-list">
          {filteredRecipes.map(recipe => (
            <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="recipe">
              <img src={recipe.image} className="img recipe-img" alt={recipe.name} />
              <h5>{recipe.name}</h5>
              <p>Prep : {recipe.prepTime} | Cook : {recipe.cookTime}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
