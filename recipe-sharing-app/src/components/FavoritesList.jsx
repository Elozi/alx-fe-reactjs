import { useRecipeStore } from '../stores/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="border p-3 rounded mb-2">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button
              className="text-red-500 text-sm"
              onClick={() => removeFavorite(recipe.id)}
            >
              Remove from favorites
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
