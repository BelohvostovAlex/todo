import React from 'react';
import { TodoSelectProps } from './interfaces';

export const TodoSelect: React.FC<TodoSelectProps> = ({
  avaliableOptions,
  selectedOption,
  handleOption,
  classes,
}) => {
  return (
    <select
      name="todo-select"
      id="todo-select"
      onChange={handleOption}
      className={classes}
      value={selectedOption}
    >
      {avaliableOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
