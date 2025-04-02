import React from "react";

function RecipeList() {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <section className="mt-3">
      <table className="table table-striped caption-top mb-0">
        <caption>
          0 recipes listed.
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
          <tr>
            <td colSpan="6">No recipes listed. Create one now!</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default RecipeList;
