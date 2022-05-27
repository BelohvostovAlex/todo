import React from 'react';
import { Button } from '../../components/Button';
import { ButtonTypes } from '../../components/Button/interfaces';
import { EmptyBlock } from '../../components/EmptyBlock/EmptyBlock';
import { FilterListContainer } from '../../components/FilterList';
import { ModalContainer } from '../../components/Modal';
import { PageHeader } from '../../components/PageHeader';

import { TodoContainer } from '../../components/Todo/TodoContainer';
import { TodoPageProps } from './interfaces';

import './todoPage.scss';

export const TodoPage: React.FC<TodoPageProps> = ({
  todos,
  deleteTodo,
  visibleModal,
  handleVisibleModal,
  hasTodo,
  filterTodos,
  availiableOptions,
  handleTodoProgress,
  currentFilter,
  modalType,
  initialValue,
  handleSubmit,
}) => {
  return (
    <div className="todo-page">
      <PageHeader title="Todo list" />
      <div className="container">
        <FilterListContainer
          filterTodos={filterTodos}
          currentFilter={currentFilter}
        />
        {!hasTodo ? (
          <EmptyBlock text={`There is nothing in '${currentFilter}' now...`} />
        ) : (
          <div className="todo-page__wrapper">
            {todos.map(({ id, title, description, status }) => {
              return (
                <TodoContainer
                  key={id}
                  title={title}
                  description={description}
                  id={id}
                  status={status}
                  todos={todos}
                  deleteTodo={() => deleteTodo(id)}
                  availiableOptions={availiableOptions}
                  handleTodoProgress={handleTodoProgress}
                  handleVisibleModal={() => handleVisibleModal(id)}
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
          <ModalContainer
            onClose={handleVisibleModal}
            availiableOptions={availiableOptions}
            modalType={modalType}
            initialValue={initialValue}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};
