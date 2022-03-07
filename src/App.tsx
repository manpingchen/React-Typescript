import "./App.css";
import NewToDo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learning React"), new Todo("Learning TypeScript")];

  const addTodoHandler = (todo: string) => {
    console.log(todo);
  };

  return (
    <div>
      <Todos items={todos} />
      <NewToDo onAddTodo={addTodoHandler} />
    </div>
  );
}

export default App;
