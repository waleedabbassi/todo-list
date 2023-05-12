import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");


  const handleAddTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEdite = (index) =>{

setTodos(todos.find((i)=>i.index === index));

  }

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            <button onClick={() => handleEdite(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
