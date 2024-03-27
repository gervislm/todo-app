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
import { Footer } from "../components/Footer";

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
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
      </TodoHeader>

      <main className="MainContent">
        <TodoList
          error={error}
          loading={loading}
          totalTodos={totalTodos}
          searchText={searchValue}
          searchedTodos={searchedTodos}
          onError={() => <ErrorTodos />}
          onLoading={() => (
            <>
              <LoadingTodos />
              <LoadingTodos />
              <LoadingTodos />
            </>
          )}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResult={(searchText) => (
            <p>The TODO {searchText} does not exist</p>
          )}
          render={(todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        />
      </main>

      <Footer />

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
