import React, { useState } from 'react';

import { TodoPage } from './TodoPage';
import { ITodo } from '../../models/ITodo';

export const TodoPageContainer: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[]);
  const [modalType, setModalType] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);
  const [currIDForEdit, setCurrIDForEdit] = useState('');
  const [
    initialValueForModalWithEditFeature,
    setInitialValueForModalWithEditFeature,
  ] = useState({} as ITodo);

  const hasTodo = !!todos.length;

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleVisibleModal = () => {
    setVisibleModal((prev) => !prev);
    setModalType('create');
  };

  const handleVisibleModalWithEditFeature = (id: string) => {
    setVisibleModal(true);
    setCurrIDForEdit(id);
    setModalType('edit');
    const currTodo = todos.find((todo) => todo.id === id);
    setInitialValueForModalWithEditFeature({
      id: currTodo!.id,
      title: currTodo!.title,
      description: currTodo!.description,
    });
  };

  const onCloseModalWithEditFeature = () => {
    setVisibleModal(false);
  };

  const editTodo = (id: string, title: string, description: string) => {
    const currTodo = todos.find((todo) => todo.id === id);
    const editedTodo = {
      ...currTodo,
      title,
      description,
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
    onCloseModalWithEditFeature();
  };

  return (
    <TodoPage
      todos={todos.slice(-5)}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      visibleModal={visibleModal}
      handleVisibleModal={handleVisibleModal}
      handleVisibleModalWithEditFeature={handleVisibleModalWithEditFeature}
      currIDForEdit={currIDForEdit}
      editTodo={editTodo}
      onCloseModalWithEditFeature={onCloseModalWithEditFeature}
      hasTodo={hasTodo}
      modalType={modalType}
      initialValueForModalWithEditFeature={initialValueForModalWithEditFeature}
    />
  );
};
