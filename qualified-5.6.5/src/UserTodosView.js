import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserTodosView() {
  const [todos, setTodos] = useState([]);

  const {id} = useParams();

  // Load Users
  useEffect(() => {
    const abortController = new AbortController();

    async function loadTodosForUser(id) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}/todos`,
          { signal: abortController.signal }
        );

        const todos = await response.json();
        setTodos(todos);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    }

    loadTodosForUser(id);

    return () => {
      abortController.abort(); // Cancels any pending request or response
    };
  }, [id]);

  const listItems = todos.map((todo) => (
    <li
      key={todo.id}
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.title}
    </li>
  ));

  return (
    <>
      <h3 className="m-2">Todo items</h3>
      <ul>{listItems}</ul>
    </>
  );
}

export default UserTodosView;
