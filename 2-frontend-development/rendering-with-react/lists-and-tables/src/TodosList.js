function Todos() {
    const todos = [
        "Finish the Lists & Tables checkpoint",
        "Clean my desk",
        "Make lunch",
    ];

    const listItems = todos.map((todo, index) => <li key={index}>{todo}</li>)

    return (
        <>
        <ul>{listItems}</ul>;
        </>
    )
}

export default Todos;