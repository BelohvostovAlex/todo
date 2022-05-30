import React from 'react';
import { TodoSelectProps } from './interfaces';
import { availiableOptionsEnum } from '../../models/enums';

const availiableOptionsObj: Record<string, string> = {
  todo: availiableOptionsEnum.todo,
  in_progress: availiableOptionsEnum.in_progress,
  done: availiableOptionsEnum.done,
};
console.log(availiableOptionsObj);

export const TodoSelect: React.FC<TodoSelectProps> = ({
  availiableOptions,
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
      {availiableOptions.map((option) => (
        <option key={option} value={option}>
          {availiableOptionsObj[option]}
        </option>
      ))}
    </select>
  );
};
