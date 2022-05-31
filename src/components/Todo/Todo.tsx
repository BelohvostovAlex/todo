import React from 'react';

import { TodoProps } from './interfaces';
import { RoundButton } from '../RoundButton/RoundButton';

import './todo.scss';

import { TodoSelect } from '../TodoSelect/TodoSelect';

export const Todo: React.FC<TodoProps> = ({
  title,
  description,
  deleteTodo,
  selectedOption,
  handleOption,
  classes,
  handleVisibleModal,
}) => {
  return (
    <div className="todo">
      <div className="todo-text">
        <h2 className="todo-text__title">{title}</h2>
        <h3 className="todo-text__descr">{description}</h3>
      </div>
      <div className="todo-right-part">
        <TodoSelect
          selectedOption={selectedOption}
          handleOption={handleOption}
          classes={classes}
        />
        <RoundButton
          text="X"
          className="round-btn round-btn--red"
          onClick={deleteTodo}
        />
        <RoundButton
          text="E"
          className="round-btn round-btn--yellow"
          onClick={handleVisibleModal}
        />
      </div>
    </div>
  );
};
