// src/components/Home.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const Home = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h1>All Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
