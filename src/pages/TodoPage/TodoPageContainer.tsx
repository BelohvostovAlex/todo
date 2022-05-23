import React, { useState, useEffect } from 'react';

import { TodoPage } from './TodoPage';
import { ITodo } from '../../models/ITodo';

export const TodoPageContainer: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[]);
  const [filteredTodos, setFilteredTodos] = useState([] as ITodo[]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [avaliableOptions, setAvaliableOptions] = useState([
    'Todo',
    'In progress',
    'Done',
  ]);
  const [currentFilter, setCurrentFilter] = useState('All');

  useEffect(() => {
    filterTodos(currentFilter);
  }, [todos]);

  const hasTodo = !!filteredTodos.length;

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleVisibleModal = () => {
    setVisibleModal((prev) => !prev);
  };

  const handleTodoProgress = (id: string, progress: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, progress: progress } : todo
      )
    );
  };

  const filterTodos = (title: string) => {
    if (title === 'All') {
      setCurrentFilter(title);
      setFilteredTodos(todos);
    } else {
      setFilteredTodos(todos.filter((todo) => todo.progress === title));
      setCurrentFilter(title);
    }
  };

  return (
    <TodoPage
      todos={filteredTodos.slice(-5)}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      visibleModal={visibleModal}
      handleVisibleModal={handleVisibleModal}
      hasTodo={hasTodo}
      filterTodos={filterTodos}
      avaliableOptions={avaliableOptions}
      handleTodoProgress={handleTodoProgress}
      currentFilter={currentFilter}
    />
  );
};
