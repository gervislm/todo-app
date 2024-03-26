import React from "react";
import "./NewTodoButton.css";

function NewTodoButton({ setOpenModal }) {
  return (
    <footer>
      <span className="Link">
        Gervis Maldonado
        <a href="https://github.com/gervislm/todo-app" target="_blank">
          GitHub Code
        </a>
      </span>
      <button
        className="NewTodoButton"
        onClick={() => setOpenModal((state) => !state)}
      >
        +
      </button>
    </footer>
  );
}

export { NewTodoButton };
