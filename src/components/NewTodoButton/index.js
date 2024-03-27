import React from "react";
import "./NewTodoButton.css";

function NewTodoButton({ setOpenModal }) {
  return (
    <button
      className="NewTodoButton"
      onClick={() => setOpenModal((state) => !state)}
    >
      +
    </button>
  );
}

export { NewTodoButton };
