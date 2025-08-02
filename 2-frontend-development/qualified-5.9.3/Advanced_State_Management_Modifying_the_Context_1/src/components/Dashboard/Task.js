// function Task ({ task }) {
//   const color = task.complete ? "secondary" : "primary";
  
//   const 

//   return (
//     <article 
//       className={`task bg-${color}-subtle mb-3 p-3 d-flex align-items-baseline justify-content-between gap-5`}
//     >
//       <p className="my-3">{task.content}</p>
//       <aside style={{ minWidth: "130px " }}>
//         <button className={`btn btn-sm btn-${color}`}>
//           Mark {task.complete ? "Incomplete" : "Complete"}
//         </button>
//       </aside>
//     </article>
//   );
// }

// export default Task;


import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";


function Task ({ task }) {
  const { toggleTaskCompletion } = useContext(TasksContext);
  const color = task.complete ? "secondary" : "primary";

  const handleToggle = () => {
    toggleTaskCompletion(task.id);
  };
  
  return (
    <article 
      className={`task bg-${color}-subtle mb-3 p-3 d-flex align-items-baseline justify-content-between gap-5`}
    >
      <p className="my-3">{task.content}</p>
      <aside style={{ minWidth: "130px " }}>
        <button className={`btn btn-sm btn-${color}`} onClick={handleToggle}>
          Mark {task.complete ? "Incomplete" : "Complete"}
        </button>
      </aside>
    </article>
  );
}

export default Task;