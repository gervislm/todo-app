import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { LoadingTodos } from '../components/LoadingTodos';
import { ErrorTodos } from '../components/ErrorTodos';
import { EmptyTodos } from '../components/EmptyTodos';
import { NewTodoButton } from '../components/NewTodoButton';
import { TodoForm } from '../components/TodoForm';
import { Modal } from '../components/Modal';
import { TodoContext } from '../App/TodoContext';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

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
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
