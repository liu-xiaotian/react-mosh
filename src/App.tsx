import ListGroup from "./components/ListGroup";
import "./App.css";
import { BsCalendarFill } from "react-icons/bs";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      <BsCalendarFill color="red" size="40" />
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => {}}
      ></ListGroup>
    </div>
  );
}

export default App;
