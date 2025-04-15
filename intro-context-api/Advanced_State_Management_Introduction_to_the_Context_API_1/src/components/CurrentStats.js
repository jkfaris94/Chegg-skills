import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

function CurrentStats() {
  const { complete } = useContext(TasksContext)

  return (
    <section id="current-stats" className="container">
      <div className="row my-4">
        <div className="col align-items-stretch">
          <aside
            style={{ height: "100%" }}
            className="p-5 bg-primary-subtle d-flex align-items-center justify-content-center"
          >
            <h2 className="text-dark text-center">
              <span className="display-5 text-primary">{complete.length}</span>
              <br />
              Tasks Completed
            </h2>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default CurrentStats;
