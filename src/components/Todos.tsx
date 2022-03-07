import React from "react";

// Use "Generics type"
// FC stands for Functional Component

type Items = { id: number; title: string }[];
const Todos: React.FC<{ items: Items }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
