import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Todo } from './Todo';
import { TodoContainerProps } from './interfaces';
import { useOptions } from '../../hooks/useOptions';
import { createTodoSelectClasses } from './classesHelper';

export const TodoContainer: React.FC<TodoContainerProps> = ({
  id,
  title,
  description,
  deleteTodo,
  todos,
  handleVisibleModal,
}) => {
  const currentTodo = todos.find((todo) => todo.id === id);
  const navigate = useNavigate();

  const [selectedOption, handleOption] = useOptions(currentTodo!, id!);
  const classes = createTodoSelectClasses(selectedOption);

  const handleSingleTodoPage = () => {
    navigate(`/todos/${id}`);
  };
  return (
    <Todo
      id={id}
      title={title}
      description={description}
      deleteTodo={() => deleteTodo(id)}
      selectedOption={selectedOption}
      handleOption={handleOption}
      classes={classes}
      handleVisibleModal={handleVisibleModal}
      handleSingleTodoPage={handleSingleTodoPage}
    />
  );
};
