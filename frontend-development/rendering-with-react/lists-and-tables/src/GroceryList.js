

function GroceryList({ items }) {
    const groceryList = [
        { quantity: 6, item: "Bananas" },
        { quantity: 3, item: "Apples" },
        { quantity: 10, item: "Oranges" },
    ];

    const rows = groceryList.map(( { quantity, item }, index) => (
        <tr key={index}>
            <td>{quantity}</td>
            <td>{item}</td>
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Item</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default GroceryList;