import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  const rows = recipes.map(({ name, cuisine, photo, ingredients, preparation }, index) => (
    <tr key={index}>
      <td class="align-middle">{name}</td>
      <td class="align-middle">{cuisine}</td>
      <td><img src={photo} alt={name} style={{ width: "100px" }} /></td>
      <td>{ingredients}</td>
      <td>{preparation}</td>
      <td>
      <button name="delete" class="btn btn-outline-danger" onClick={() => deleteRecipe(index)}>Delete Recipe</button>
      </td>
    </tr>
  ))

  return (
    <section className="mt-3">
      <table className="table table-striped caption-top mb-0">
        <caption>
          {recipes.length} recipes listed.
        </caption>
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No recipes listed. Create one now!</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default RecipeList;
