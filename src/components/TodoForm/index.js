import React from "react";
import "./TodoForm.css";
import { useNavigate } from "react-router-dom";

export function TodoForm({ previousTodoText, submitEvent, label, submitText }) {
  const navigate = useNavigate();
  const [newTodoText, setNewTodoText] = React.useState(previousTodoText || "");

  const onSubmit = (event) => {
    event.preventDefault();
    submitEvent(newTodoText);
    navigate("/");
  };

  const onChange = (event) => {
    setNewTodoText(event.target.value);
  };

  const onCancel = () => {
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{label}</label>
      <textarea
        placeholder="Take Dobby for a walk"
        value={newTodoText}
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
          {submitText}
        </button>
      </div>
    </form>
  );
}
