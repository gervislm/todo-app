import React from "react";
import "./TodoList.css";

export function TodoList({
  error,
  loading,
  totalTodos,
  searchText,
  searchedTodos,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResult,
  render,
}) {
  return (
    <main className="MainContent">
      <section className="TodoList-container">
        {error && onError()}
        {loading && onLoading()}
        {!loading && !totalTodos && onEmptyTodos()}

        {!!totalTodos &&
          !searchedTodos.length &&
          onEmptySearchResult(searchText)}

        <ul>{!loading && !error && searchedTodos.map(render)}</ul>
      </section>
    </main>
  );
}
