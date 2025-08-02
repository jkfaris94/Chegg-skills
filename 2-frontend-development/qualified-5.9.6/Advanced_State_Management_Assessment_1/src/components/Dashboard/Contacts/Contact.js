function Contact({ contact }) {
  return (
    <article className="p-4 my-3 mx-1 bg-warning-subtle">
      <div className="d-flex justify-content-between align-content-baseline">
        <h4 className="fs-6">{contact.profile.name}</h4>
        <small className="fw-bold text-warning-emphasis">
          {contact.profile.company}
        </small>
      </div>
      <p className="text-warning-emphasis text-break my-2">{contact.email}</p>
    </article>
  );
}

export default Contact;
