# React & Typescript
A React + Typescript project, going through refs, data models, form submitting, state management

https://user-images.githubusercontent.com/10693128/157898591-daddc1ae-fbee-4e0a-a9eb-a27da80a57e6.mov

## Features
### Add new todo item
```typescript
const addTodoHandler = (todo: string) => {
  setTodos((prevTodos) => prevTodos.concat(new Todo(todo)));
};
```
### Remove todo item (:dizzy: with fancy animation background!)
```typescript
const removeTodoHandler = (todoId: string) => {
  setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
};
```
### Context API
```useContext``` to manage the states and actions
#### Define the type of the todo context
```typescript
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
```
#### Shape the context for the project
```typescript
export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});
```
### Create Context Provider
```typescript
const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: string) => {
    setTodos((prevTodos) => prevTodos.concat(new Todo(todo)));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};
```
