import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learning React"), new Todo("Learning TypeScript")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
