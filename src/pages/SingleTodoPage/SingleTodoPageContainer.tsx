import React from 'react';
import { SingleTodoPage } from './SingleTodoPage';

import { useParams } from 'react-router-dom';
import { useHandlers } from '../../hooks/useHandlers';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useOptions } from '../../hooks/useOptions';
import { IPureTodo } from '../../models/ITodo';
import { createTodoSelectClasses } from '../../components/Todo/classesHelper';

export const SingleTodoPageContainer: React.FC = () => {
  const { id } = useParams();
  const { todos } = useTypedSelector((state) => state.todosReducer);
  const { isVisible, type } = useTypedSelector((state) => state.modalReducer);
  const { handleVisibleModal, initialValue, editTodo } = useHandlers();

  const handleVisible = () => {
    handleVisibleModal(id);
  };
  const currentTodo = todos.find((todo) => todo.id === id);
  const { title, description } = currentTodo!;

  const [selectedOption, handleOption] = useOptions(currentTodo!, id!);

  const handleSubmit = (data: IPureTodo) => {
    if (type === 'edit') editTodo(data);
  };

  const classes = createTodoSelectClasses(selectedOption, 'todo-select--big');

  return (
    <SingleTodoPage
      handleVisibleModal={handleVisible}
      title={title}
      description={description}
      visibleModal={isVisible}
      initialValue={initialValue}
      handleSubmit={handleSubmit}
      onClose={handleVisible}
      classes={classes}
      handleOption={handleOption}
      selectedOption={selectedOption}
    />
  );
};
