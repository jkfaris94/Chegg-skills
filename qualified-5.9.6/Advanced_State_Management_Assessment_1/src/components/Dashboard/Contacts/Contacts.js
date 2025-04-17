import { useState } from "react";
import Contact from "./Contact";

function Contacts({ contacts }) {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filtered = contacts.filter((contact) => {
    return contact.profile.name.toLowerCase().includes(search.toLowerCase());
  });

  const listElements = filtered.map((contact) => (
    <Contact key={contact.id} contact={contact} />
  ));

  return (
    <section id="contacts">
      <h3 className="text-center">Contacts</h3>
      <form>
        <input
          className="form-control my-3"
          type="text"
          placeholder="Search by name..."
          onChange={handleSearch}
          value={search}
        />
      </form>
      <section
        className="border border-warning overflow-y-auto"
        style={{ maxHeight: "85vh" }}
      >
        {listElements}
      </section>
    </section>
  );
}

export default Contacts;
