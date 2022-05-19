import React, { useState } from 'react';
import classNames from 'classnames';

import { Todo } from './Todo';
import { TodoContainerProps } from './interfaces';

export const TodoContainer: React.FC<TodoContainerProps> = ({
  id,
  title,
  descr,
  deleteTodo,
  handleEditVisibleModal,
}) => {
  const [avaliableOptions, setAvaliableOptions] = useState([
    'Todo',
    'In progress',
    'Done',
  ]);
  const [selectedOption, setSelectedOption] = useState('');
  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  const classes = classNames('todo-select', {
    'todo-select--blue': selectedOption === 'Todo',
    'todo-select--green': selectedOption === 'In progress',
    'todo-select--orange': selectedOption === 'Done',
  });
  return (
    <Todo
      id={id}
      title={title}
      descr={descr}
      deleteTodo={deleteTodo}
      handleEditVisibleModal={handleEditVisibleModal}
      avaliableOptions={avaliableOptions}
      selectedOption={selectedOption}
      handleOption={handleOption}
      classes={classes}
    />
  );
};
