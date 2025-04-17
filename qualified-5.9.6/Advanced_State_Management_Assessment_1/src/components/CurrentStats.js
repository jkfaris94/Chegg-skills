import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";
import { SalesContext } from "../contexts/SalesContext";
import { CallsContext } from "../contexts/CallsContext";
import { ContactsContext } from "../contexts/ContactsContext";

function CurrentStats() {
  const { tasks } = useContext(TasksContext);
  const { sales } = useContext(SalesContext);
  const { calls } = useContext(CallsContext);
  const { contacts } = useContext(ContactsContext);
  const completedTasks = tasks.filter((task) => task.complete).length;
  const callsMade = calls.filter((call) => call.complete).length;
  const contactsAmount = contacts.length;


  return (
    <section id="current-stats" className="container-fluid px-3">
      <div className="row my-4">
        <div className="col col-xs-12 col-sm-3 align-items-stretch">
          <aside
            style={{ height: "100%" }}
            className="p-5 bg-warning-subtle d-flex align-items-center justify-content-center"
          >
            <h2 className="text-dark text-center fs-3">
              <span className="display-5 text-warning">{contactsAmount}</span>
              <br />
              Contacts
            </h2>
          </aside>
        </div>
        <div className="col col-xs-12 col-sm-3 align-items-stretch">
          <aside
            style={{ height: "100%" }}
            className="p-5 bg-primary-subtle d-flex align-items-center justify-content-center"
          >
            <h2 className="text-dark text-center fs-3">
              <span className="display-5 text-primary">{completedTasks}</span>
              <br />
              Tasks Complete
            </h2>
          </aside>
        </div>
        <div className="col col-xs-12 col-sm-3 align-items-stretch">
          <aside
            style={{ height: "100%" }}
            className="p-5 bg-danger-subtle d-flex align-items-center justify-content-center"
          >
            <h2 className="text-dark text-center fs-3">
              <span className="text-danger display-5">{sales.length}</span>
              <br />
              Sales
            </h2>
          </aside>
        </div>
        <div className="col col-xs-12 col-sm-3 align-items-stretch">
          <aside
            style={{ height: "100%" }}
            className="p-5 bg-success-subtle d-flex align-items-center justify-content-center"
          >
            <h2 className="text-dark text-center fs-3">
              <span className="text-success display-5">{callsMade}</span>
              <br />
              Calls Made
            </h2>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default CurrentStats;
