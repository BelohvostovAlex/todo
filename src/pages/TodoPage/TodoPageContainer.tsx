import React, { useState, useEffect } from 'react';

import { TodoPage } from './TodoPage';
import { ITodo, ITodoFull } from '../../models/ITodo';
import axios from 'axios';

export const TodoPageContainer: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodoFull[]);
  const [filteredTodos, setFilteredTodos] = useState([] as ITodoFull[]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [avaliableOptions, setAvaliableOptions] = useState([
    'todo',
    'in_progress',
    'done',
  ]);
  // const handleCurrentStatus = (status: string) => {
  //   const neededStatus = Object.entries(avaliableOptions).find(
  //     ([key, val]) => val === status
  //   );
  //   return neededStatus![0];
  // };
  const [currentFilter, setCurrentFilter] = useState('all');

  const fetchData = async (url: string) => {
    const { data } = await axios.get<ITodoFull[]>(url);
    setTodos(data);
  };

  useEffect(() => {
    fetchData('http://localhost:4000/api');
  }, []);

  useEffect(() => {
    filterTodos(currentFilter);
  }, [todos]);

  const hasTodo = !!filteredTodos.length;

  const addTodo = async (todo: ITodo) => {
    const { data } = await axios.post('http://localhost:4000/api/', todo);
    setTodos([...todos, data]);
  };

  const deleteTodo = async (id: string) => {
    const currentTodo = todos.find((todo) => todo.id === id);
    await axios.delete<ITodoFull>('http://localhost:4000/api/', {
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

  const filterTodos = (title: string) => {
    if (title === 'all') {
      setCurrentFilter(title);
      setFilteredTodos(todos);
    } else {
      setFilteredTodos(todos.filter((todo) => todo.status === title));
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
