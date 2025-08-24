import React, { useState } from 'react';

function AddTodoForm({ onAdd }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Add todo form">
      <input
        aria-label="Add todo input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
