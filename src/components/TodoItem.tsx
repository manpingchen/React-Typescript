import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ title: string; onRemoveTodo: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.title}
    </li>
  );
};

export default TodoItem;
