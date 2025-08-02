import GroceryList from "./GroceryList";

function App() {
  const groceryItems = ["Bananas", "Apples", "Oranges"];
  
  return (
    <div className="App">
      <GroceryList items={groceryItems}/>
    </div>
  );
}

export default App;
