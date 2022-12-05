import { useEffect } from "react";
import { useState } from "react";
import { api } from "./api/api";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");

  const fetchTodos = () =>
    api.getTodos().then((response) => setTodos(response.data.todos));

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    const todo = {
      title: newTodo,
      description: newTodoDescription,
      done: false,
    };
    await api.addTodo(todo);
    await fetchTodos();
  };

  const handleTodoComplete = async (todo) => {
    await api.updateTodo(todo);
    setTodos((todos) => todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  const deleteTodo = async (todo) => {
    await api.deleteTodo(todo);
    setTodos((todos) => todos.filter((t) => t.id !== todo.id));
  };

  return (
    <ul>
      <p>
        <input
          placeholder="New todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <input
          placeholder="Details?"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
        />
        <button onClick={addTodo}>Add todo</button>
      </p>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onComplete={handleTodoComplete}
          onDelete={deleteTodo}
        />
      ))}
    </ul>
  );
};
