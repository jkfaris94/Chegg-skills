import Tasks from "./Tasks";

function Dashboard({ tasks }) {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Tasks tasks={tasks} />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
