import { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "../../contexts/TasksContext";

function Tasks() {
  const { tasks } = useContext(TasksContext);
  const taskElements = tasks.map((task) => <Task key={task.id} task={task} />);

  return (
    <section>
      <h3 className="text-center">Tasks</h3>
      <div className="d-flex flex-column mt-3">{taskElements}</div>
    </section>
  );
}

export default Tasks;
