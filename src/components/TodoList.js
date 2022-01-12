import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, dones, setDones }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
            dones={dones}
            setDones={setDones}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
