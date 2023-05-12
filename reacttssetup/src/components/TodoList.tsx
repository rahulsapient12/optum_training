import React from "react";

interface toDoListProps {
  items: { id: string; text: string }[];
  onDeleteTod: (id: string) => void;
}

const TodoList: React.FC<toDoListProps> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((todo) => (
          <li key={todo.id}>
            <span> {todo.text}</span>
            <button onClick={()=>{props.onDeleteTod(todo.id)}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
