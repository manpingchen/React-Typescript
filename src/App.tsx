import "./App.css";
import Todos from "./components/Todos";

function App() {
  const items = [{ id: 1, title: "Learn React" },{ id: 2, title: "Learn Typescript" }];
  return (
    <div>
      <Todos items={items} />
    </div>
  );
}

export default App;
