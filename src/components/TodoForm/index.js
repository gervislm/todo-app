import React from "react";
import "./TodoForm.css";
import { useNavigate } from "react-router-dom";

function TodoForm(props) {
  const navigate = useNavigate();
  const [newTodoText, setNewTodoText] = React.useState(
    props.previousTodoText || ""
  );

  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoText);
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
      <label>{props.label}</label>
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
          {props.submitText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
