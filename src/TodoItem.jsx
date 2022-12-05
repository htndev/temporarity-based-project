import "./TodoItem.css";

export const TodoItem = ({ todo, onComplete, onDelete }) => {
  return (
    <li className={["todo-item", todo.done && "done"].join(" ")}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onComplete({ ...todo, done: !todo.done })}
      />
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo)}>Delete</button>
    </li>
  );
};
