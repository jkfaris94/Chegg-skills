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

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  return (
    <form></form>
  );
}

export default RecipeCreate;
