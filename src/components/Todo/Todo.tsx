import React from 'react';

import { TodoProps } from './interfaces';
import { RoundButton } from '../RoundButton/RoundButton';

import './todo.scss';

export const Todo: React.FC<TodoProps> = ({
  id,
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
          className="round-btn round-btn--red"
          onClick={() => deleteTodo(id)}
        />
        <RoundButton
          text="E"
          className="round-btn round-btn--yellow"
          onClick={() => handleVisibleModalWithEditFeature(id)}
        />
      </div>
    </div>
  );
};
