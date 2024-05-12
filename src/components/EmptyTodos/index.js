import React from "react";
import "./EmptyTodos.css";

export const EmptyTodos = ({ searchText }) => {
  return (
    <p className={searchText ? "Searched-todoText" : "Empty-todo"}>
      {searchText
        ? `The TODO ${searchText} does not exist`
        : "Create your first todo..."}
    </p>
  );
};
