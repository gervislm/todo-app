import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading, totalTodos }) {
  return (
    <input
      className="TodoSearch"
      placeholder={!totalTodos ? "there are no todo" : "Search todo"}
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      disabled={loading || !totalTodos}
    />
  );
}

export { TodoSearch };
