import React, { useState } from 'react';

import { TodoPage } from './TodoPage';
import { ITodo } from '../../models/ITodo';

export const TodoPageContainer: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[]);
  const [visibleModal, setVisibleModal] = useState(false);

  const hasTodo = todos.length ? true : false;

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleVisibleModal = () => {
    setVisibleModal((prev) => !prev);
  };

  return (
    <TodoPage
      todos={todos.slice(-5)}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      visibleModal={visibleModal}
      handleVisibleModal={handleVisibleModal}
      hasTodo={hasTodo}
    />
  );
};
