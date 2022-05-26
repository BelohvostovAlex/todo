import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { TodoPage } from './TodoPage';
import { ITodo, IPureTodo } from '../../models/ITodo';

const todoOptionsBackend: Record<string, string> = {
  Todo: 'todo',
  'In progress': 'in_progress',
  Done: 'done',
};

const availiableOptions = ['todo', 'in_progress', 'done'];

const defaultValue = {
  id: '',
  title: '',
  description: '',
  status: '',
};

export const TodoPageContainer: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[]);
  const [filteredTodos, setFilteredTodos] = useState([] as ITodo[]);
  const [currentFilter, setCurrentFilter] = useState('All');
  const [modalType, setModalType] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);
  const [initialValue, setInitialValue] = useState(defaultValue as ITodo);

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
    handleVisibleModal();
  };

  const deleteTodo = async (id: string) => {
    const currentTodo = todos.find((todo) => todo.id === id);
    await axios.delete<ITodo>('http://localhost:4000/api/', {
      data: { ...currentTodo },
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleVisibleModal = (id?: string) => {
    const isEdit = typeof id === 'string';
    let defaultValue = {
      id: '',
      title: '',
      description: '',
      status: '',
    };

    setVisibleModal((prev) => !prev);
    setModalType(isEdit ? 'edit' : 'create');

    if (isEdit) {
      const currTodo = todos.find((todo) => todo.id === id);
      defaultValue = { ...currTodo! };
    }

    setInitialValue(defaultValue);
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
      if (title === 'All') return setFilteredTodos(todos);

      return setFilteredTodos(
        todos.filter((todo) => todo.status === todoOptionsBackend[title])
      );
    },
    [todos]
  );

  useEffect(() => {
    filterTodos(currentFilter);
  }, [todos, currentFilter, filterTodos]);

  const editTodo = async (todo: IPureTodo) => {
    const { id } = initialValue;
    const currTodo = todos.find((todo) => todo.id === id);
    const editedTodo = {
      ...currTodo,
      ...todo,
    };
    await axios.patch('http://localhost:4000/api/', {
      ...editedTodo,
    });
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? {
              ...todo,
              title: editedTodo.title,
              description: editedTodo.description,
            }
          : todo;
      })
    );
    setVisibleModal((prev) => !prev);
  };

  const handleSubmit = (data: IPureTodo) =>
    modalType === 'create' ? addTodo(data) : editTodo(data);

  return (
    <TodoPage
      todos={filteredTodos.slice(-5)}
      deleteTodo={deleteTodo}
      visibleModal={visibleModal}
      handleVisibleModal={handleVisibleModal}
      handleSubmit={handleSubmit}
      hasTodo={hasTodo}
      filterTodos={filterTodos}
      availiableOptions={availiableOptions}
      handleTodoProgress={handleTodoProgress}
      currentFilter={currentFilter}
      modalType={modalType}
      initialValue={initialValue}
    />
  );
};
