import React, { useState, useEffect, useCallback } from 'react';

import { TodoPage } from './TodoPage';
import { ITodo, IPureTodo } from '../../models/ITodo';
import { v4 } from 'uuid';

const availiableOptions = ['Todo', 'In progress', 'Done'];

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

  const hasTodo = !!filteredTodos.length;

  const addTodo = (todo: IPureTodo) => {
    setTodos([...todos, { ...todo, id: v4() }]);
    handleVisibleModal();
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleVisibleModal = (id?: string) => {
    const isEdit = typeof id === 'string';
    let defaultValue = {
      id: '',
      title: '',
      description: '',
      status: availiableOptions[0],
    };

    setVisibleModal((prev) => !prev);
    setModalType(isEdit ? 'edit' : 'create');

    if (isEdit) {
      const currTodo = todos.find((todo) => todo.id === id);
      defaultValue = { ...currTodo! };
    }

    setInitialValue(defaultValue);
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

  const editTodo = (todo: IPureTodo) => {
    const { id } = initialValue;
    const currTodo = todos.find((todo) => todo.id === id);
    const editedTodo = {
      ...currTodo,
      ...todo,
    };
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
