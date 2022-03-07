import { useState } from "react";
import "./App.css";
import NewToDo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: string) => {
    setTodos((prevTodos) => prevTodos.concat(new Todo(todo)));
  };

  return (
    <div>
      <NewToDo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
