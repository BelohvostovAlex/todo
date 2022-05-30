import React from 'react';
import classNames from 'classnames';
import { SingleTodoPage } from './SingleTodoPage';

import { useParams } from 'react-router-dom';
import { useHandlers } from '../../hooks/useHandlers';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useOptions } from '../../hooks/useOptions';
import { IPureTodo } from '../../models/ITodo';

export const SingleTodoPageContainer: React.FC = () => {
  const { id } = useParams();
  const { todos } = useTypedSelector((state) => state.todosReducer);
  const { isVisible, type } = useTypedSelector((state) => state.modalReducer);
  const { handleVisibleModal, initialValue, editTodo, addTodo } = useHandlers();

  const handleVisible = () => {
    handleVisibleModal(id);
  };
  const currentTodo = todos.find((todo) => todo.id === id);
  const { title, description } = currentTodo!;

  const [selectedOption, handleOption] = useOptions(currentTodo!, id!);

  const handleSubmit = (data: IPureTodo) =>
    type === 'create' ? addTodo(data) : editTodo(data);

  const classes = classNames('todo-select', 'todo-select--big', {
    'todo-select--blue': selectedOption === 'todo',
    'todo-select--green': selectedOption === 'in_progress',
    'todo-select--orange': selectedOption === 'done',
  });
  return (
    <SingleTodoPage
      handleVisibleModal={handleVisible}
      title={title}
      description={description}
      modalType={type}
      visibleModal={isVisible}
      initialValue={initialValue}
      handleSubmit={handleSubmit}
      onClose={handleVisible}
      classes={classes}
      handleOption={handleOption}
      selectedOption={selectedOption}
      availiableOptions={['todo', 'in_progress', 'done']}
    />
  );
};
