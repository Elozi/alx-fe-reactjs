// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addRecipe({
      id: Date.now(),
      title,
      description,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Add a Recipe</h2>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '0.5rem' }}
      />
      <textarea
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '0.5rem' }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
