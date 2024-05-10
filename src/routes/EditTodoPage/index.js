import React from "react";
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../../App/useTodos";
import { useLocation, useParams } from "react-router-dom";
import { LoadingTodos } from "../../components/LoadingTodos";

const EditTodoPage = () => {
  const location = useLocation();
  const { id } = useParams();
  const todoId = Number(id);

  const { state, actions } = useTodos();
  const { loading, getTodo } = state;
  const { editTodo } = actions;

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <LoadingTodos />;
  } else {
    const todo = getTodo(todoId);
    todoText = todo.text;
  }
  return (
    <TodoForm
      label="Edit your ToDo"
      previousTodoText={todoText}
      submitText="Confirm"
      submitEvent={(newText) => editTodo(todoId, newText)}
    />
  );
};

export { EditTodoPage };
