import { useState } from "react";

function CreateProfile({ setUser }) {
  const [formData, setFormData] = useState({ username: "", email: "" });

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h2 className="pb-3">Create a profile</h2>
      <form name="profileCreate" onSubmit={onSubmit}>
        <section className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={formData.username}
          />
        </section>
        <section className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            onChange={handleChange}
            value={formData.email}
          />
        </section>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreateProfile;
