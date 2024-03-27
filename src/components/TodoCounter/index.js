import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <h1 className={`TodoCounter ${!!loading && "TodoCounter-loading"}`}>
      You have completed
      <span> {completedTodos} </span>
      of
      <span> {totalTodos} </span> tasks to do!
    </h1>
  );
}

export { TodoCounter };
