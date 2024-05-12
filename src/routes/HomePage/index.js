import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTodos } from "../../App/useTodos";
import { TodoHeader } from "../../components/TodoHeader";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { LoadingTodos } from "../../components/LoadingTodos";
import { EmptyTodos } from "../../components/EmptyTodos";
import { NewTodoButton } from "../../components/NewTodoButton";
import { Footer } from "../../components/Footer";
import { StorageAlert } from "../../components/StorageAlert";

const HomePage = () => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const { state, actions } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
  } = state;

  const { toggleTodo, setSearchValue, deleteTodo, syncTodos } = actions;

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          totalTodos={totalTodos}
          params={params}
          setParams={setParams}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchText={searchValue}
        searchedTodos={searchedTodos}
        onError={() => navigate("/error")}
        onLoading={() => (
          <>
            <LoadingTodos />
            <LoadingTodos />
            <LoadingTodos />
          </>
        )}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResult={() => <EmptyTodos searchText={searchValue} />}
        render={(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => {
              navigate("/edit/" + todo.id, { state: { todo } });
            }}
            onComplete={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      />

      <StorageAlert synchronize={syncTodos} />

      <NewTodoButton onClick={() => navigate("/new")} />

      <Footer />
    </>
  );
};

export { HomePage };
