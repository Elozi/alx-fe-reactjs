import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Write tests", completed: true },
  { id: 3, text: "Build a todo app", completed: false },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // toggleTodo and deleteTodo as before...

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li
            key={id}
            onClick={() => toggleTodo(id)}
            style={{ cursor: "pointer", textDecoration: completed ? "line-through" : "none" }}
            aria-label={`todo-item-${id}`}
          >
            {text}
            <button
              aria-label={`delete-todo-${id}`}
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
