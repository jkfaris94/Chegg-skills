import { useState } from "react";
function UpdateProfile({ user, setUser }) {
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        {
          method: "PUT",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json;charset=UTF-8",
          },
        }
      );

      const json = await response.json();
      setUser(json);
    } catch (error) {
      console.error("API FAILURE");
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="pb-3">Update your profile</h2>
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

export default UpdateProfile;