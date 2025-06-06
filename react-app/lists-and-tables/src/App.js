import './App.css';

const todos = [
  { completed: false, description: "Finish the Lists & Tables checkpoint" },
  { completed: false, description: "Clean my desk" },
  { completed: false, description: "Make lunch" },
];

function App() {
  const rows = todos.map(({completed, description}, index) => (
    <tr key={index}>
      <td>{description}</td>
      <td>{completed ? "yes" : "no"}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Completed?</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default App;
