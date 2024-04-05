import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    syncItem: syncTodos,
    loading,
    error,
  } = useLocalStorage("TODO_BACKUP", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchedText = searchValue.toLowerCase();
    return todoText.includes(searchedText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  const states = {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    openModal,
    searchValue,
  };

  const stateUpdaters = {
    completeTodo,
    setSearchValue,
    addTodo,
    deleteTodo,
    setOpenModal,
    syncTodos,
  };

  return {
    states,
    stateUpdaters,
  };
}
export { useTodos };
