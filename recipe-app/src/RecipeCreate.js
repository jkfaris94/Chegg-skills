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
      <form name="create" onSubmit={handleSubmit}  className="container text-center">
      <div className="row">
        <label htmlFor="name" className="col">   
          <input 
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            class="form-control"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <label htmlFor="cuisine" className="col">
          <input 
            id="name"
            type="text"
            name="cuisine"
            placeholder="cuisine"
            class="form-control"
            onChange={handleChange}
            value={formData.cuisine}
          />
        </label>
        <label htmlFor="photo" className="col">
          <input 
            id="photo"
            type="url"
            name="photo"
            placeholder="URL"
            class="form-control"
            onChange={handleChange}
            value={formData.photo}
          />
        </label>
      </div>
      <div className="row">
        <label htmlFor="ingredients" className="col">
          <textarea 
            id="ingredients"
            type="text"
            name="ingredients"
            placeholder="Ingredients"
            class="form-control"
            onChange={handleChange}
            value={formData.ingredients}
          >
          </textarea>
        </label>
        <label htmlFor="preparation" className="col">
          <textarea 
            id="preparation"
            type="text"
            name="preparation"
            placeholder="Preparation"
            class="form-control"
            onChange={handleChange}
            value={formData.preparation}
          >
          </textarea>
        </label>
        <div className="col auto">
          <button type="submit" class="form-control">Create</button>
        </div>
      </div>
    </form>
    </section>
  );
}

export default RecipeCreate;
