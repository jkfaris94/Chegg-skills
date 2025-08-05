
function TodoItem({ todo, onToggle, onDelete }) {
    const { id, text, completed } = todo;

    const handleClick = () => {
        onToggle(id); // Notify parent to toggle this todo
    };

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <>
            <p style={{ textDecoration: completed ? "line-through" : "none" }}>
                {text}
            </p>
            <button onClick={handleClick}>
                {completed ? "Undo" : "Complete"}
            </button>
            <button onClick={handleDelete}>delete</button>
        </>
    );
}

export default TodoItem;