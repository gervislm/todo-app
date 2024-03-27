import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new TODO</label>
      <textarea
        placeholder="Take Dobby for a walk"
        value={newTodoValue}
        onChange={onChange}
        autoFocus
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
