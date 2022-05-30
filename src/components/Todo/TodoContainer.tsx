import React from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { Todo } from './Todo';
import { TodoContainerProps } from './interfaces';
import { useOptions } from '../../hooks/useOptions';

export const TodoContainer: React.FC<TodoContainerProps> = ({
  id,
  title,
  description,
  deleteTodo,
  availiableOptions,
  todos,
  handleVisibleModal,
}) => {
  const currentTodo = todos.find((todo) => todo.id === id);
  const navigate = useNavigate();

  const [selectedOption, handleOption] = useOptions(currentTodo!, id!);

  const classes = classNames('todo-select', {
    'todo-select--blue': selectedOption === 'todo',
    'todo-select--green': selectedOption === 'in_progress',
    'todo-select--orange': selectedOption === 'done',
  });

  const handleSingleTodoPage = () => {
    navigate(`/todos/${id}`);
  };
  return (
    <Todo
      id={id}
      title={title}
      description={description}
      deleteTodo={() => deleteTodo(id)}
      availiableOptions={availiableOptions}
      selectedOption={selectedOption}
      handleOption={handleOption}
      classes={classes}
      handleVisibleModal={handleVisibleModal}
      handleSingleTodoPage={handleSingleTodoPage}
    />
  );
};
