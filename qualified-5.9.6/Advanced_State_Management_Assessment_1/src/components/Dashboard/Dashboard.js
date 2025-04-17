import Contacts from "./Contacts/Contacts";
import Tasks from "./Tasks/Tasks";
import Sales from "./Sales/Sales";
import Calls from "./Calls/Calls";

function Dashboard({ contacts, calls, setCalls }) {
  return (
    <main className="container-fluid px-3">
      <div className="row">
        <div className="col-md-3">
          <Contacts contacts={contacts} />
        </div>
        <div className="col-md-3">
          <Tasks />
        </div>
        <div className="col-md-3">
          <Sales />
        </div>
        <div className="col-md-3">
          <Calls contacts={contacts} calls={calls} setCalls={setCalls} />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
