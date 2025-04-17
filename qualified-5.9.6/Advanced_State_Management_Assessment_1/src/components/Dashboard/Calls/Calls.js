import Call from "./Call";
import NewCallForm from "./NewCallForm";

function Calls({ calls, contacts, setCalls }) {
  // Update single call handler
  const updateCall = (call, saleId) => {
    const index = calls.findIndex((el) => el.id === call.id);
    setCalls([
      ...calls.slice(0, index),
      { ...call, saleId },
      ...calls.slice(index + 1),
    ]);
  };

  // Create new call handler
  const createCall = (contactId) => {
    const newCall = {
      id: calls.length + 1,
      contactId,
      createdAt: Date.now(),
      saleId: null,
    };

    setCalls([...calls, newCall]);
  };

  const callElements = calls.map((call) => (
    <Call
      key={call.id}
      call={call}
      contacts={contacts}
      updateCall={updateCall}
    />
  ));

  return (
    <section id="calls">
      <h3 className="text-center">Calls</h3>
      {callElements}
      <NewCallForm contacts={contacts} createCall={createCall} />
    </section>
  );
}

export default Calls;
