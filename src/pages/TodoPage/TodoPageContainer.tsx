import React, { useState } from 'react';

import { TodoPage } from './TodoPage';
import { ITodo } from '../../models/ITodo';

export const TodoPageContainer: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[]);

  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleEditModal, setVisibleEditModal] = useState(false);
  const [currIDForEdit, setCurrIDForEdit] = useState('');

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleVisibleModal = () => {
    setVisibleModal((prev) => !prev);
  };

  const handleEditVisibleModal = (id: string) => {
    setVisibleEditModal(true);
    setCurrIDForEdit(id);
  };

  const onCloseEditVisibleModal = () => {
    setVisibleEditModal(false);
    setCurrIDForEdit('');
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
    onCloseEditVisibleModal();
  };

  return (
    <TodoPage
      todos={todos}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      visibleModal={visibleModal}
      handleVisibleModal={handleVisibleModal}
      visibleEditModal={visibleEditModal}
      handleEditVisibleModal={handleEditVisibleModal}
      currIDForEdit={currIDForEdit}
      editTodo={editTodo}
      onCloseEditVisibleModal={onCloseEditVisibleModal}
    />
  );
};
