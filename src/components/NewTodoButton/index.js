import React from "react";
import "./NewTodoButton.css";

function NewTodoButton({ onClick }) {
  return (
    <button className="NewTodoButton" onClick={onClick}>
      +
    </button>
  );
}

export { NewTodoButton };
