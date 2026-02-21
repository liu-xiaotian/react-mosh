import ListGroup from "./components/ListGroup";
import "./App.css";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => {}}
      ></ListGroup>
    </div>
  );
}

export default App;
