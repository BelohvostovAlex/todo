import React, { useState } from 'react';

import { TodoPage } from './TodoPage';
import { ITodo, IPureTodo } from '../../models/ITodo';
import { v4 } from 'uuid';

const defaultValue = {
  id: '',
  title: '',
  description: '',
};

export const TodoPageContainer: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[]);
  const [modalType, setModalType] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);
  const [initialValue, setInitialValue] = useState(defaultValue as ITodo);

  const hasTodo = !!todos.length;

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
    };

    setVisibleModal((prev) => !prev);
    setModalType(isEdit ? 'edit' : 'create');

    if (isEdit) {
      const currTodo = todos.find((todo) => todo.id === id);
      defaultValue = { ...currTodo! };
    }

    setInitialValue(defaultValue);
  };

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
      todos={todos.slice(-5)}
      deleteTodo={deleteTodo}
      visibleModal={visibleModal}
      handleVisibleModal={handleVisibleModal}
      handleSubmit={handleSubmit}
      hasTodo={hasTodo}
      modalType={modalType}
      initialValue={initialValue}
    />
  );
};
