import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      You have completed
      <strong> {completedTodos} </strong>
      of
      <strong> {totalTodos} </strong> tasks to do!
    </h1>
  );
}

export { TodoCounter };
