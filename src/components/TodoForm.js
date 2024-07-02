import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !description) return;
    addTodo({
      task,
      description,
      status: "Not Completed",
    });
    setTask("");
    setDescription("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Todo Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
