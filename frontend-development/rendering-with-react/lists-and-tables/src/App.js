import GroceryList from "./GroceryList";
import Todos from "./TodosList";

function App() {
  const groceryItems = ["Bananas", "Apples", "Oranges"];

  return (
    <div >
      <GroceryList items={groceryItems}/>
      <Todos />
    </div>
  );
}

export default App;
