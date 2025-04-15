function Tasks({ tasks }) {
  const taskElements = tasks.map((task) => {
    const color = task.complete ? "secondary" : "primary";

    return (
      <article
        key={task.id}
        className={`task bg-${color}-subtle mb-3 p-3 d-flex align-items-baseline justify-content-between gap-5`}
      >
        <p className="my-3">{task.content}</p>
        <aside style={{ minWidth: "130px " }}>
          <button className={`btn btn-sm btn-${color}`}>
            Mark {task.complete ? "Incomplete" : "Complete"}
          </button>
        </aside>
      </article>
    );
  });

  return (
    <section>
      <h3 className="text-center">Tasks</h3>
      <div className="d-flex flex-column mt-3">{taskElements}</div>
    </section>
  );
}

export default Tasks;
