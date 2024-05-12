import React, { useEffect } from "react";
import "./TodoSearch.css";

export function TodoSearch({
  searchValue,
  setSearchValue,
  loading,
  totalTodos,
  params,
  setParams,
}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);

    let params = {
      search: event.target.value,
    };
    setParams(params);
  };

  useEffect(() => {
    const search = params.get("search") ?? "";
    setSearchValue(search);
  }, [setSearchValue, params]);

  return (
    <input
      className="TodoSearch"
      placeholder={!totalTodos ? "there are no todo" : "Search todo"}
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading || !totalTodos}
    />
  );
}
