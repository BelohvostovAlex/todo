import React from 'react';

import { TodoProps } from './interfaces';
import { RoundButton } from '../RoundButton/RoundButton';

import './todo.scss';

export const Todo: React.FC<TodoProps> = ({
  id,
  title,
  description,
  deleteTodo,
  avaliableOptions,
  selectedOption,
  handleOption,
  classes,
}) => {
  return (
    <div className="todo">
      <div className="todo-text">
        <h2 className="todo-text__title">{title}</h2>
        <h3 className="todo-text__descr">{description}</h3>
      </div>
      <div className="todo-right-part">
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
        <div className="todo-buttons">
          <RoundButton
            text="X"
            className="round-btn round-btn--red"
            onClick={() => deleteTodo(id)}
          />
        </div>
      </div>
    </div>
  );
};
