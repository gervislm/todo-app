import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../App/TodoContext';

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <h1 className='TodoCounter'>
      You have completed
      <span> {completedTodos} </span>
      of
      <span> {totalTodos} </span> tasks to do!
    </h1>
  );
}

export { TodoCounter };
