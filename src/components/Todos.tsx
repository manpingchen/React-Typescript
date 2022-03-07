import React from "react";
import Todo from "../models/todo";

// Use "Generics type"
// FC stands for Functional Component
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
