import React from 'react';
import { Button } from '../../components/Button';
import { ButtonTypes } from '../../components/Button/interfaces';
import { EmptyBlock } from '../../components/EmptyBlock/EmptyBlock';
import { ModalContainer } from '../../components/Modal';
import { PageHeader } from '../../components/PageHeader';

import { TodoContainer } from '../../components/Todo/TodoContainer';
import { TodoPageProps } from './interfaces';

import './todoPage.scss';

export const TodoPage: React.FC<TodoPageProps> = ({
  todos,
  deleteTodo,
  addTodo,
  visibleModal,
  handleVisibleModal,
  hasTodo,
}) => {
  return (
    <div className="todo-page">
      <PageHeader title="Todo list" />
      <div className="container">
        {!hasTodo ? (
          <EmptyBlock text="There are nothing here... Please create one" />
        ) : (
          <div className="todo-page__wrapper">
            {todos.map(({ id, title, description }) => {
              return (
                <TodoContainer
                  key={id}
                  title={title}
                  description={description}
                  id={id}
                  deleteTodo={() => deleteTodo(id)}
                />
              );
            })}
          </div>
        )}
        <div className="todo-page__button-wrapper">
          <Button
            text="Create new"
            type={ButtonTypes.BUTTON}
            className="button button--green"
            onClick={handleVisibleModal}
          />
        </div>
        {visibleModal && (
          <ModalContainer onClose={handleVisibleModal} addTodo={addTodo} />
        )}
      </div>
    </div>
  );
};
