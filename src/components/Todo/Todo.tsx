import React from 'react';

import { TodoProps } from './interfaces';
import { RoundButton } from '../RoundButton/RoundButton';

import './todo.scss';
import { ButtonTypes } from '../Button/interfaces';
import { TodoSelect } from '../TodoSelect/TodoSelect';

export const Todo: React.FC<TodoProps> = ({
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
        <TodoSelect
          avaliableOptions={avaliableOptions}
          selectedOption={selectedOption}
          handleOption={handleOption}
          classes={classes}
        />
        <RoundButton
          text="X"
          type={ButtonTypes.BUTTON}
          className="round-btn round-btn--red"
          onClick={deleteTodo}
        />
      </div>
    </div>
  );
};
