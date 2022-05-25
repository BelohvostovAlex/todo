import React, { useState, useEffect, useCallback } from 'react';

import { TodoPage } from './TodoPage';
import { IPureTodo, ITodo } from '../../models/ITodo';
import { v4 } from 'uuid';

export const TodoPageContainer: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[]);
  const [filteredTodos, setFilteredTodos] = useState([] as ITodo[]);
  const [visibleModal, setVisibleModal] = useState(false);
  const availiableOptions = ['Todo', 'In progress', 'Done'];
  const [currentFilter, setCurrentFilter] = useState('All');

  const hasTodo = !!filteredTodos.length;

  const addTodo = (todo: IPureTodo) => {
    setTodos([...todos, { ...todo, id: v4() }]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleVisibleModal = () => {
    setVisibleModal((prev) => !prev);
  };

  const handleTodoProgress = (id: string, status: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status: status } : todo))
    );
  };

  const filterTodos = useCallback(
    (title: string) => {
      setCurrentFilter(title);
      if (title === 'All') return setFilteredTodos(todos);

      return setFilteredTodos(todos.filter((todo) => todo.status === title));
    },
    [todos]
  );

  useEffect(() => {
    filterTodos(currentFilter);
  }, [todos, currentFilter, filterTodos]);

  return (
    <TodoPage
      todos={filteredTodos.slice(-5)}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      visibleModal={visibleModal}
      handleVisibleModal={handleVisibleModal}
      hasTodo={hasTodo}
      filterTodos={filterTodos}
      availiableOptions={availiableOptions}
      handleTodoProgress={handleTodoProgress}
      currentFilter={currentFilter}
    />
  );
};
