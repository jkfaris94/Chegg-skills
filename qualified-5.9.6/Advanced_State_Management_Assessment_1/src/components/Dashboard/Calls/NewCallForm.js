import { useState } from "react";

function NewCallForm({ contacts, createCall }) {
  const [contactId, setContactId] = useState("");
  const [error, setError] = useState("");

  // Form handling
  const handleChange = (event) => setContactId(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Number(contactId);

    if (id) {
      createCall(id);
      setContactId("");
      setError("");
    } else {
      setError("Please select a contact to log a call from.");
    }
  };

  const options = contacts.map((contact) => (
    <option key={contact.id} value={contact.id}>
      {contact.profile.name} of {contact.profile.company}
    </option>
  ));

  return (
    <>
      <form 
        id="new-call-form"
        className="my-3 border p-3"
        onSubmit={handleSubmit}
      >
        <label htmlFor="contact" className="form-label">
          Choose a Contact
        </label>
        <select
          id="contact"
          className="form-control"
          onChange={handleChange}
          value={contactId}
        >
          <option>-- Choose a Contact --</option>
          {options}
        </select>
        <button type="submit" className="btn btn-success mt-3">
          Log Call
        </button>
      </form>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </>
  );
}

export default NewCallForm;
