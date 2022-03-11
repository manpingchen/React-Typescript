import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";

// Use "Generics type"
// FC stands for Functional Component
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
