import React from 'react';
import { Button } from '../../components/Button';
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
  visibleEditModal,
  handleVisibleModal,
  handleEditVisibleModal,
  onCloseEditVisibleModal,
  editTodo,
  currIDForEdit,
}) => {
  return (
    <div className="todo-page">
      <PageHeader title="Todo list" />
      <div className="container">
        {!todos.length ? (
          <EmptyBlock text="There are nothing here... Please create one" />
        ) : (
          <div className="todo-page__wrapper">
            {todos.slice(-5).map(({ id, title, description }) => {
              return (
                <TodoContainer
                  key={id}
                  title={title}
                  descr={description}
                  id={id}
                  deleteTodo={() => deleteTodo(id)}
                  handleEditVisibleModal={() => handleEditVisibleModal(id)}
                />
              );
            })}
          </div>
        )}
        <div className="todo-page__button-wrapper">
          <Button
            btnText="Create new"
            btnClass="button button--green"
            onClickBtn={handleVisibleModal}
          />
        </div>
        {(visibleModal || visibleEditModal) && (
          <ModalContainer
            onClose={handleVisibleModal}
            addTodo={addTodo}
            visibleEditModal={visibleEditModal}
            onCloseEditModal={onCloseEditVisibleModal}
            editTodo={editTodo}
            currIDForEdit={currIDForEdit}
          />
        )}
      </div>
    </div>
  );
};
