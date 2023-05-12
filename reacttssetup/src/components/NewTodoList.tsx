import React, { useRef } from "react";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodoList: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const toDoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
    props.onAddTodo(enteredText);
  };

  return (
    <div>
      <form onSubmit={toDoSubmitHandler}>
        <div>
          <label htmlFor="todo-text">Todo Text</label>
          <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button>Add ToDO</button>
      </form>
    </div>
  );
};

export default NewTodoList;
