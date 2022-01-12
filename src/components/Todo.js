import React from "react";

const Todo = ({ text, setTodos, todos, todo, setDones, dones }) => {

  const addDoneHandler = () => {
    setDones([
      ...dones,
      { text: text, completed: true, id: todo.id },
    ]);
    setTodos(todos.filter((el) => el.id !== todo.id));
    // console.log(dones);
  }

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={addDoneHandler}>Done</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Todo;
