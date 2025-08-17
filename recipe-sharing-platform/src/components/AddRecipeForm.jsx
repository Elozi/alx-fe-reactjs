import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!title.trim()) errors.title = 'Title is required';
    if (!ingredients.trim()) {
      errors.ingredients = 'Ingredients are required';
    } else if (ingredients.split(',').length < 2) {
      errors.ingredients = 'Please provide at least two ingredients';
    }

    if (!instructions.trim()) errors.instructions = 'Instructions are required';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const newRecipe = {
        title,
        ingredients: ingredients.split(',').map((item) => item.trim()),
        instructions: instructions.split('.').map((step) => step.trim()).filter(Boolean),
      };

      console.log('Recipe submitted:', newRecipe);
      alert('Recipe submitted successfully!');

      // Clear form
      setTitle('');
      setIngredients('');
      setInstructions('');
      setErrors({});
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Recipe Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Ingredients (comma-separated)</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Preparation Steps (end each step with a period)</label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
