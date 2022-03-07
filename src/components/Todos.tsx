import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// Use "Generics type"
// FC stands for Functional Component
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} title={item.title} />
      ))}
    </ul>
  );
};

export default Todos;
