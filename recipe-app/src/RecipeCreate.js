import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
    ...formData,
    [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <section className="mt-3">
      <h2>Add a new Recipe</h2>
      <form name="create" onSubmit={handleSubmit}  className="mt-4">
      <div className="row g-3 mb-3">
        <label htmlFor="name" className="col-md-4">   
          <input 
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <label htmlFor="cuisine" className="col-md-4">
          <input 
            id="name"
            type="text"
            name="cuisine"
            placeholder="cuisine"
            onChange={handleChange}
            value={formData.cuisine}
          />
        </label>
        <label htmlFor="photo" className="col-md-4">
          <input 
            id="photo"
            type="url"
            name="photo"
            placeholder="URL"
            onChange={handleChange}
            value={formData.photo}
          />
        </label>
      </div>
      <div className="row g-3 align-items-stretch">
        <label htmlFor="ingredients" className="col-md-4">
          <textarea 
            id="ingredients"
            type="text"
            name="ingredients"
            placeholder="Ingredients"
            onChange={handleChange}
            value={formData.ingredients}
          >
          </textarea>
        </label>
        <label htmlFor="preparation" className="col-md-4">
          <textarea 
            id="preparation"
            type="text"
            name="preparation"
            placeholder="Preparation"
            onChange={handleChange}
            value={formData.preparation}
          >
          </textarea>
        </label>
        <button type="submit" className="col-md-4">Create</button>
      </div>
    </form>
    </section>
  );
}

export default RecipeCreate;
