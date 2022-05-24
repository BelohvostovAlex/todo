import React, { useState } from 'react';
import classNames from 'classnames';

import { Todo } from './Todo';
import { TodoContainerProps } from './interfaces';

export const TodoContainer: React.FC<TodoContainerProps> = ({
  id,
  title,
  description,
  deleteTodo,
  avaliableOptions,
  handleTodoProgress,
  todos,
}) => {
  const currentTodo = todos.find((todo) => todo.id === id);
  const [selectedOption, setSelectedOption] = useState(currentTodo!.status);

  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);

    handleTodoProgress(id, e.target.value);
  };

  const classes = classNames('todo-select', {
    'todo-select--blue': selectedOption === 'todo',
    'todo-select--green': selectedOption === 'in_progress',
    'todo-select--orange': selectedOption === 'done',
  });
  return (
    <Todo
      id={id}
      title={title}
      description={description}
      deleteTodo={() => deleteTodo(id)}
      avaliableOptions={avaliableOptions}
      selectedOption={selectedOption}
      handleOption={handleOption}
      classes={classes}
    />
  );
};
