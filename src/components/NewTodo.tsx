import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

const NewToDo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const toDoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = toDoInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="new-to-do">Todo Text</label>
      <input type="text" id="new-to-do" ref={toDoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewToDo;
