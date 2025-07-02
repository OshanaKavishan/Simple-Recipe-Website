// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import recipes from '../data/recipes';

// function TagsPage() {
//   const { tag } = useParams();

//   const filteredRecipes = recipes.filter(
//     recipe => recipe.tag.toLowerCase() === tag.toLowerCase()
//   );

//   if (filteredRecipes.length === 0) {
//     return (
//       <main className="page">
//         <h2>No recipes found for tag: {tag}</h2>
//       </main>
//     );
//   }

//   return (
//     <main className="page">
//       <h2 className="section-title">Recipes for "{tag}"</h2>
//       <div className="recipes-list">
//         {filteredRecipes.map(recipe => (
//           <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="recipe">
//             <img src={recipe.image} className="img recipe-img" alt={recipe.name} />
//             <h5>{recipe.name}</h5>
//             <p>Prep: {recipe.prepTime} | Cook: {recipe.cookTime}</p>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }

// export default TagsPage;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from '../data/recipes';

function TagsPage() {
  const { tag } = useParams();

  const filteredRecipes = recipes.filter(
    recipe => recipe.tag.toLowerCase() === tag.toLowerCase()
  );

  return (
    <main className="page">
      {/* ✅ Breadcrumb
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link> &gt; <Link to="/tags">Tags</Link> &gt; {tag}
      </nav> */}

      {/* ✅ Back to Home button */}
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/" className="btn">
          ← Back to Home
        </Link>
      </div>

      <h2 className="section-title">Recipes for "{tag}"</h2>

      {filteredRecipes.length === 0 ? (
        <h4>No recipes found for this tag.</h4>
      ) : (
        <div className="recipes-list">
          {filteredRecipes.map(recipe => (
            <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="recipe">
              <img src={recipe.image} className="img recipe-img" alt={recipe.name} />
              <h5>{recipe.name}</h5>
              <p>Prep: {recipe.prepTime} | Cook: {recipe.cookTime}</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

export default TagsPage;

