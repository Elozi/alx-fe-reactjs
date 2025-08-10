// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm'; // ✅ Import added

const App = () => {
  return (
    <Router>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} /> {/* ✅ Add form route */}
      </Routes>
    </Router>
  );
};

export default App;
