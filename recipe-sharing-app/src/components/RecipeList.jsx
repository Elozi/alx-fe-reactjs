// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes || state.recipes);

  if (recipes.length === 0) {
    return <p className="text-center">No recipes found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border rounded p-4">
          <Link to={`/recipes/${recipe.id}`}>
            <h3 className="text-lg font-bold text-blue-600 hover:underline">{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
