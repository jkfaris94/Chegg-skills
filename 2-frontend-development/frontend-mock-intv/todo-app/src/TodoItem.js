
function TodoItem({ todo, onToggle }) {
    const { id, text, completed } = todo;

    const handleClick = () => {
        onToggle(id); // Notify parent to toggle this todo
    };

    return (
        <>
            <p style={{ textDecoration: completed ? "line-through" : "none" }}>
                {text}
            </p>
            <button onClick={handleClick}>
                {completed ? "Undo" : "Complete"}
            </button>
        </>
    );
}

export default TodoItem;