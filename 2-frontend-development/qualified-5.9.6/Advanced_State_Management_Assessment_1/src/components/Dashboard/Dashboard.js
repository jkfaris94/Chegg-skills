import Contacts from "./Contacts/Contacts";
import Tasks from "./Tasks/Tasks";
import Sales from "./Sales/Sales";
import Calls from "./Calls/Calls";

function Dashboard() {

  return (
    <main className="container-fluid px-3">
      <div className="row">
        <div className="col-md-3">
          <Contacts />
        </div>
        <div className="col-md-3">
          <Tasks />
        </div>
        <div className="col-md-3">
          <Sales />
        </div>
        <div className="col-md-3">
          <Calls />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
