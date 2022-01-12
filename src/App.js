import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";

function App() {
  const [todoList, setTodoList] = useState("");
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  return (
    <div>
      <Form
        setTodoList={setTodoList}
        todos={todos}
        todoList={todoList}
        setTodos={setTodos}
      />
      <TodoList 
      todos={todos} 
      setTodos={setTodos}
      dones={dones}
      setDones={setDones}
      
      />
      <DoneList 
      dones={dones} 
      setDones={setDones}
      />
    </div>
  );
}

export default App;
