import React, { useState } from 'react';

import { TodoPage } from './TodoPage';
import { ITodo, IPureTodo } from '../../models/ITodo';
import { v4 } from 'uuid';

export const TodoPageContainer: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[]);
  const [modalType, setModalType] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);
  const [initialValue, setInitialValue] = useState({} as ITodo);

  const hasTodo = !!todos.length;

  const addTodo = (todo: IPureTodo) => {
    setTodos([...todos, { ...todo, id: v4() }]);
    handleVisibleModal();
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleVisibleModal = () => {
    setInitialValue({} as ITodo);
    setVisibleModal((prev) => !prev);
    setModalType('create');
  };

  const handleVisibleModalWithEditFeature = (id: string) => {
    setVisibleModal((prev) => !prev);
    setModalType('edit');
    const currTodo = todos.find((todo) => todo.id === id);
    setInitialValue({
      id: currTodo!.id,
      title: currTodo!.title,
      description: currTodo!.description,
    });
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

  return (
    <TodoPage
      todos={todos.slice(-5)}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      visibleModal={visibleModal}
      handleVisibleModal={handleVisibleModal}
      handleVisibleModalWithEditFeature={handleVisibleModalWithEditFeature}
      editTodo={editTodo}
      hasTodo={hasTodo}
      modalType={modalType}
      initialValue={initialValue}
    />
  );
};
