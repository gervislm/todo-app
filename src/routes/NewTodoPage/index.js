import React from "react";
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../../App/useTodos";

const NewTodoPage = () => {
  const { actions } = useTodos();
  const { addTodo } = actions;

  return (
    <TodoForm
      label="Write your new Todo"
      submitText="Add"
      submitEvent={(text) => addTodo(text)}
    />
  );
};

export { NewTodoPage };
