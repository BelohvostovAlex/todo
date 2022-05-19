import React from 'react';

import { TodoProps } from './interfaces';
import { RoundButton } from '../RoundButton/RoundButton';

import './todo.scss';

export const Todo: React.FC<TodoProps> = ({
  id,
  title,
  descr,
  deleteTodo,
  handleEditVisibleModal,
}) => {
  return (
    <div className="todo">
      <div className="todo-text">
        <h2 className="todo-text__title">{title}</h2>
        <h3 className="todo-text__descr">{descr}</h3>
      </div>
      <div className="todo-buttons">
        <RoundButton
          btnText="X"
          btnClass="round-btn round-btn--red"
          onClickBtn={() => deleteTodo(id)}
        />
        <RoundButton
          btnText="E"
          btnClass="round-btn round-btn--yellow"
          onClickBtn={() => handleEditVisibleModal(id)}
        />
      </div>
    </div>
  );
};
