import React from 'react';

import './singleTodoPage.scss';
import { SingleTodoPageProps } from './interfaces';
import { PageHeader } from '../../components/PageHeader';
import { ModalContainer } from '../../components/Modal';
import { TodoSelect } from '../../components/TodoSelect/TodoSelect';
import { Button } from '../../components/Button';

export const SingleTodoPage: React.FC<SingleTodoPageProps> = ({
  handleVisibleModal,
  title,
  description,
  visibleModal,
  modalType,
  initialValue,
  handleSubmit,
  availiableOptions,
  classes,
  handleOption,
  selectedOption,
}) => {
  return (
    <div className="single-todo-page">
      <PageHeader title="Todo list" />
      <div className="container">
        <div className="single-todo-page__wrapper">
          <aside className="aside-part"></aside>
          <div className="single-todo">
            <h3 className="single-todo__title">Title</h3>
            <p className="single-todo__title-text">{title}</p>
            <h3 className="single-todo__title">Description</h3>
            <p className="single-todo__title-description">{description}</p>
            <div className="single-todo__buttons-wrapper">
              <TodoSelect
                availiableOptions={availiableOptions}
                classes={classes}
                handleOption={handleOption}
                selectedOption={selectedOption}
              />
              <Button
                text="Edit"
                className="button button--blue button--long"
                onClick={handleVisibleModal}
              />
            </div>
          </div>
        </div>
      </div>
      {visibleModal && (
        <ModalContainer
          onClose={handleVisibleModal}
          modalType={modalType}
          initialValue={initialValue}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
