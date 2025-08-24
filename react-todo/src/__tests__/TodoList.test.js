import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList'; // Adjust path if needed

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Build a todo app')).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    const input = screen.getByLabelText('Add todo input');
    const form = screen.getByLabelText('Add todo form');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.submit(form);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');

    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todo);
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const deleteButton = screen.getByLabelText('delete-todo-1');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
