import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../components/TodoHeader";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { LoadingTodos } from "../components/LoadingTodos";
import { ErrorTodos } from "../components/ErrorTodos";
import { EmptyTodos } from "../components/EmptyTodos";
import { NewTodoButton } from "../components/NewTodoButton";
import { TodoForm } from "../components/TodoForm";
import { Modal } from "../components/Modal";

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList>
        {loading && (
          <>
            <LoadingTodos />
            <LoadingTodos />
            <LoadingTodos />
            <LoadingTodos />
            <LoadingTodos />
            <LoadingTodos />
            <LoadingTodos />
            <LoadingTodos />
            <LoadingTodos />
          </>
        )}
        {error && <ErrorTodos />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <NewTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
}

export default App;
