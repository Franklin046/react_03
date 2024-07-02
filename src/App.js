import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTodo = (todo) => {
    console.log("Adding Todo:", todo);
    setTodos([...todos, todo]);
  };

  const updateTodo = (updatedTodo, status) => {
    setTodos(
      todos.map((todo) => (todo === updatedTodo ? { ...todo, status } : todo))
    );
  };

  const deleteTodo = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo !== todoToDelete));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    return todo.status === filter;
  });

  console.log("Filtered Todos:", filteredTodos);

  return (
    <div className="App">
      <h1>My todo</h1>
      <TodoForm addTodo={addTodo} />
      <div className="filter-container">
        <label>
          Status Filter:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </select>
        </label>
      </div>
      <h2>My Todos</h2>
      <TodoList
        todos={filteredTodos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
