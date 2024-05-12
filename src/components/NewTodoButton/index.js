import React from "react";
import "./NewTodoButton.css";

export function NewTodoButton({ onClick }) {
  return (
    <button className="NewTodoButton" onClick={onClick}>
      +
    </button>
  );
}
