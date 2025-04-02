import React from "react";
import RecipeData from "./data";


function RecipeList() {
  const rows = RecipeData.map(({ name, cuisine, photo, ingredients, preparation, actions}, index) => (
    <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td><img src={photo} alt={name} style={{ width: "100px" }} /></td>
      <td>{ingredients}</td>
      <td>{preparation}</td>
      <td>{actions}</td>
    </tr>
  ))

  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <section className="mt-3">
      <table className="table table-striped caption-top mb-0">
        <caption>
          {RecipeData.length} recipes listed.
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
          {rows}
          <tr>
            <td colSpan="6">No recipes listed. Create one now!</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default RecipeList;
