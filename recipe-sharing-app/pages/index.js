import { useEffect } from 'react';
import { useRecipeStore } from '../stores/recipeStore';
import FavoritesList from '../components/FavoritesList';
import RecommendationsList from '../components/RecommendationsList';

export default function Home() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const recipes = useRecipeStore((state) => state.recipes);

  // Sample mock data
  useEffect(() => {
    setRecipes([
      { id: 1, title: 'Jollof Rice', description: 'A Nigerian delicacy.' },
      { id: 2, title: 'Efo Riro', description: 'Spinach stew with beef/fish.' },
      { id: 3, title: 'Fried Plantain', description: 'Sweet and crispy.' },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>

      <div className="mb-8">
        <h2 className="text-lg font-semibold">Available Recipes</h2>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border p-3 mb-2 rounded">
            <h3 className="font-medium">{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button
              className="text-blue-500 text-sm"
              onClick={() => addFavorite(recipe.id)}
            >
              Add to Favorites
            </button>
          </div>
        ))}
      </div>

      <FavoritesList />
      <div className="mt-8">
        <RecommendationsList />
      </div>
    </div>
  );
}
