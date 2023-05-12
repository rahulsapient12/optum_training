import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodoList from "./components/NewTodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "t1",
      text: "finish the course",
    },
  ]);

  const todoTextHandler = (text: string) => {
    console.log(text);
    setTodos((prevtodos) => [
      ...prevtodos,
      { id: Math.random().toString(), text: text },
    ]);
  };
  const deleteTodoHandler = (id: string) => {
    console.log(id);
    setTodos((prevtodos) => {
      return prevtodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div>
      <TodoList items={todos} onDeleteTod={deleteTodoHandler} />
      <NewTodoList onAddTodo={todoTextHandler} />
    </div>
  );
};

export default App;
