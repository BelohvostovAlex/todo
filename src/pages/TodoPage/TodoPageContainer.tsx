import React, { useState } from 'react';

import { TodoPage } from './TodoPage';
import { IPureTodo, ITodo } from '../../models/ITodo';
import { v4 } from 'uuid';

export const TodoPageContainer: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[]);
  const [visibleModal, setVisibleModal] = useState(false);

  const hasTodo = !!todos.length;

  const addTodo = (todo: IPureTodo) => {
    setTodos([...todos, { ...todo, id: v4() }]);
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
