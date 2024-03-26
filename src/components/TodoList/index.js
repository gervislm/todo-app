import React from "react";
import "./TodoList.css";

function TodoList({ children }) {
  return (
    <main>
      <ul className="TodoList">{children}</ul>
    </main>
  );
}

export { TodoList };
