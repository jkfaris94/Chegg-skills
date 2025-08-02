import SaleOptions from "./SaleOptions";

function Call({ call, contacts, updateCall }) {
  const { profile } = contacts.find((contact) => contact.id === call.contactId);
  const formatted = new Date(call.createdAt).toLocaleString();

  return (
    <article className="call py-4 px-3 my-3 bg-success-subtle">
      <p className="mb-0">
        Call with{" "}
        <span className="text-success-emphasis fw-bold">{profile.name}</span> of{" "}
        <span className="text-success-emphasis fw-bold">{profile.company}</span>
      </p>
      <p className="mb-0 opacity-50">{formatted}</p>

      <hr className="my-2" />

      <SaleOptions
        call={call}
        company={profile.company}
        updateCall={updateCall}
      />
    </article>
  );
}

export default Call;
