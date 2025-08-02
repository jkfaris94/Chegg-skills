import { useState } from "react";





function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState('All'); // "All" | "Active" | "Completed"

    const handleAddTodo = () => {
        if (newTodo.trim() === '') return;

        const newTodoItem = {
            id: Date.now(),
            text: newTodo.trim(),
            completed: false,
        };

        setTodos([...todos, newTodoItem]);
        setNewTodo('');
        console.log(todos)
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'Active') return !todo.completed;
        if (filter === 'Completed') return todo.completed;
        return true; // "All"
    });

    const handleToggleTodo = (id) => {
        const updated = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updated);
    };

    return (
        <div>
        <h1>Todo List</h1>

        <input 
            type="text" 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
            placeholder="Add a new todo" 
        />
        <button onClick={handleAddTodo}>Add</button>

        <div style={{ marginTop: '1rem' }}>
            <button 
                onClick={() => setFilter('All')} 
                style={{ fontWeight: filter === 'All' ? 'bold' : 'normal' }}
            >
                All
            </button>
            <button 
                onClick={() => setFilter('Active')} 
                style={{ fontWeight: filter === 'Active' ? 'bold' : 'normal' }}
            >
                Active
            </button>
            <button 
                onClick={() => setFilter('Completed')} 
                style={{ fontWeight: filter === 'Completed' ? 'bold' : 'normal' }}
            >
                Completed
            </button>
        </div>

        <ul>
            {filteredTodos.map((todo) => (
                <li 
                key={todo.id}
                onClick={() => handleToggleTodo(todo.id)}
                style={{ 
                    cursor: 'pointer', 
                    textDecoration: todo.completed ? 'line-through' : 'none' 
                }}
                >
                {todo.text}
                </li>
            ))}
        </ul>
        </div>
    );
}

export default TodoList;






// 🧠 Practice Problem: Todo List with Filters
// Objective:
// Create a simple Todo List app using React. Users should be able to:

// Add new todos.

// Toggle a todo as completed.

// Filter todos by: All, Active, Completed.

// ✅ Requirements
// UI:
// An input field to type a new todo and a button to add it.

// A list of todos showing their text and whether they are completed.

// Buttons or tabs to filter the view: All, Active, Completed.

// Functionality:
// New todos should be added to state.

// Clicking on a todo toggles its completed state.

// Filters should change which todos are displayed.