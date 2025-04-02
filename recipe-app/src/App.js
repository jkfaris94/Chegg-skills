import React, { useState } from "react";

import RecipeList from "./RecipeList";
import RecipeCreate from "./RecipeCreate";
import recipeData from "./data";

function App() {
  const [recipes, setRecipes] = useState(recipeData);

  return (
    <main className="container">
      <header className="bg-primary bg-gradient text-white rounded-bottom">
        <h1 className="text-center py-5 display-5">Delicious Food Recipes</h1>
      </header>
      <RecipeList />
      <RecipeCreate />
    </main>
  );
}

export default App;
