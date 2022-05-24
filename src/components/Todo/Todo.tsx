import React from 'react';

import { TodoProps } from './interfaces';
import { RoundButton } from '../RoundButton/RoundButton';

import './todo.scss';
import { ButtonTypes } from '../Button/interfaces';

export const Todo: React.FC<TodoProps> = ({
  title,
  description,
  deleteTodo,
  handleVisibleModalWithEditFeature,
}) => {
  return (
    <div className="todo">
      <div className="todo-text">
        <h2 className="todo-text__title">{title}</h2>
        <h3 className="todo-text__descr">{description}</h3>
      </div>
      <div className="todo-buttons">
        <RoundButton
          text="X"
          type={ButtonTypes.BUTTON}
          className="round-btn round-btn--red"
          onClick={deleteTodo}
        />
        <RoundButton
          text="E"
          type={ButtonTypes.BUTTON}
          className="round-btn round-btn--yellow"
          onClick={handleVisibleModalWithEditFeature}
        />
      </div>
    </div>
  );
};
