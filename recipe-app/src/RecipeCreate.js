import React, { useState } from "react";

function RecipeCreate() {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  Const [FormData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
    ...FormData,
    [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Submitted:", formData);
    setFormData({ ...initialFormState });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">   
        <input 
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <br />
      <label htmlFor="cuisine">
        <input 
          id="name"
          type="text"
          name="cuisine"
          placeholder="cuisine"
          onChange={handleChange}
          value={formData.cuisine}
        />
      </label>
      <br />
      <label htmlFor="photo">
        <input 
          id="photo"
          type="url"
          name="photo"
          placeholder="URL"
          onChange={handleChange}
          value={formData.photo}
        />
      </label>
      <br />
      <label htmlFor="ingredients">
        <input 
          id="ingredients"
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          onChange={handleChange}
          value={formData.ingredients}
        />
      </label>
      <br />
      <label htmlFor="preparation">
        <input 
          id="preparation"
          type="text"
          name="preparation"
          placeholder="Preparation"
          onChange={handleChange}
          value={formData.preparation}
        />
      </label>
      <br />
      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;
