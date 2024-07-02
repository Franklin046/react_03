import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const handleStatusChange = (e) => {
    updateTodo(todo, e.target.value);
  };

  return (
    <div className="todo-item">
      <h3>Name: {todo.task}</h3>
      <p>Description: {todo.description}</p>
      <div className="todo-status">
        <span>Status: </span>
        <select value={todo.status} onChange={handleStatusChange}>
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="todo-actions">
        <button className="edit-button">Edit</button>
        <button className="delete-button" onClick={() => deleteTodo(todo)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
