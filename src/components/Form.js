import React from "react";

const Form = ({ setTodoList, todoList, todos, setTodos }) => {
  const handleChanges = (e) => {
    setTodoList(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: todoList, completed: false, id: Math.random() * 1000 },
    ]);
    setTodoList("");
    console.log(todos);
  };

  return (
    <div>
      <form action="">
        <div>
          <input value={todoList} type="text" onChange={handleChanges} />
          <button type="submit" onClick={handleClick}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
