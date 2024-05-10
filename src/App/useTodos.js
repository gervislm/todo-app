import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    syncItem: syncTodos,
    loading,
    error,
  } = useLocalStorage("TODO_BACKUP_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = React.useMemo(
    () => todos.filter((todo) => !!todo.completed).length,
    [todos]
  );
  const totalTodos = todos.length;

  const searchedTodos = React.useMemo(
    () =>
      todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [todos, searchValue]
  );

  const addTodo = React.useCallback(
    (text) => {
      const id = newTodoId(todos);
      const newTodos = [...todos, { text, completed: false, id }];
      saveTodos(newTodos);
    },
    [todos, saveTodos]
  );

  const getTodo = React.useCallback(
    (id) => todos.find((todo) => todo.id === id),
    [todos]
  );

  const toggleTodo = React.useCallback(
    (id) => {
      const todoIndex = todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      }
    },
    [todos, saveTodos]
  );

  const editTodo = React.useCallback(
    (id, newText) => {
      const todoIndex = todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        const newTodos = [...todos];
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
      }
    },
    [todos, saveTodos]
  );

  const deleteTodo = React.useCallback(
    (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      saveTodos(newTodos);
    },
    [todos, saveTodos]
  );

  const state = {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
    getTodo,
  };

  const actions = {
    syncTodos,
    setSearchValue,
    addTodo,
    editTodo,
    toggleTodo,
    deleteTodo,
  };

  return {
    state,
    actions,
  };
}

function newTodoId(todoList) {
  if (todoList.length === 0) {
    return 1;
  } else {
    const maxId = Math.max(...todoList.map((todo) => todo.id));
    return maxId + 1;
  }
}
export { useTodos };
