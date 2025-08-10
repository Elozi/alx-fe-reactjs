// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterRecipes(); // update filtered recipes on input change
  };

  return (
    <input
      type="text"
      className="p-2 border rounded w-full mb-4"
      placeholder="Search recipes by title..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
