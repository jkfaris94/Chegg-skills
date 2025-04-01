import React, { useState } from "react";

function SubscriberForm() {
    const initialFormState = {
      name: "johnny",
      email: "",
      referral: "twitter",
      age: "",
    };
    const [formData, setFormData] = useState({ ...initialFormState });
    const handleChange = ({ target }) => {
      setFormData({
        ...formData,
        [target.name]: target.value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Submitted:", formData);
      setFormData({ ...initialFormState });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Enter Your Name:
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <br />
        <label htmlFor="email">
          Your Email:
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
        <br />
        <label htmlFor="referral">
        How did you hear about us?
        <select
            id="referral"
            name="referral"
            onChange={handleChange}
            value={formData.referral}
        >
            <option value="">-- Select an Option --</option>
            <option value="twitter">Twitter</option>
            <option value="wom">Word of Mouth</option>
            <option value="youtube">YouTube</option>
        </select>
        </label>
        <br />
        <fieldset>
          <legend>How old are you?</legend>
          <label htmlFor="low">
            Under 18
            <input
              id="low"
              type="radio"
              name="age"
              onChange={handleChange}
              value="low"
              checked={formData.age === "low"}
            />
          </label>
          <label htmlFor="middle">
            18 - 60
            <input
              id="middle"
              type="radio"
              name="age"
              onChange={handleChange}
              value="middle"
              checked={formData.age === "middle"}
            />
          </label>
          <label htmlFor="high">
            61+
            <input
              id="high"
              type="radio"
              name="age"
              onChange={handleChange}
              value="high"
              checked={formData.age === "high"}
            />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default SubscriberForm;