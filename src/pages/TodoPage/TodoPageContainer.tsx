import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { TodoPage } from './TodoPage';
import { ITodo, IPureTodo } from '../../models/ITodo';

export const TodoPageContainer: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[]);
  const [filteredTodos, setFilteredTodos] = useState([] as ITodo[]);
  const [visibleModal, setVisibleModal] = useState(false);
  const availiableOptions = ['todo', 'in_progress', 'done'];
  // const handleCurrentStatus = (status: string) => {
  //   const neededStatus = Object.entries(avaliableOptions).find(
  //     ([key, val]) => val === status
  //   );
  //   return neededStatus![0];
  // };
  const [currentFilter, setCurrentFilter] = useState('all');

  const fetchData = async (url: string) => {
    const { data } = await axios.get<ITodo[]>(url);
    setTodos(data);
  };

  useEffect(() => {
    fetchData('http://localhost:4000/api');
  }, []);

  const hasTodo = !!filteredTodos.length;

  const addTodo = async (todo: IPureTodo) => {
    const { data } = await axios.post('http://localhost:4000/api/', todo);
    setTodos([...todos, data]);
  };

  const deleteTodo = async (id: string) => {
    const currentTodo = todos.find((todo) => todo.id === id);
    await axios.delete<ITodo>('http://localhost:4000/api/', {
      data: { ...currentTodo },
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleVisibleModal = () => {
    setVisibleModal((prev) => !prev);
  };

  const handleTodoProgress = async (id: string, status: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status: status } : todo))
    );
    const currentTodo = todos.find((todo) => todo.id === id);
    await axios.patch('http://localhost:4000/api/', {
      ...currentTodo,
      status: status,
    });
  };

  const filterTodos = useCallback(
    (title: string) => {
      setCurrentFilter(title);
      if (title === 'all') return setFilteredTodos(todos);

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
