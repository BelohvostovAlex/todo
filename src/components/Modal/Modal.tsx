import React from 'react';
import { Button } from '../Button';
import { RoundButton } from '../RoundButton/RoundButton';
import { ModalProps } from './interfaces';

import './modal.scss';

export const Modal: React.FC<ModalProps> = ({
  title,
  handleTitle,
  description,
  handleDescription,
  onClose,
  onCloseEditModal,
  createTodo,
  visibleEditModal,
  editTodo,
  currIDForEdit,
}) => {
  return (
    <div className="modal">
      <form className="modal-form">
        <RoundButton
          btnText="X"
          btnClass="round-btn round-btn--gray round-btn--toRight"
          onClickBtn={visibleEditModal ? onCloseEditModal : onClose}
        />
        <label htmlFor="modal-form__text">Title</label>
        <input
          type="text"
          name="modal-from__text"
          id="modal-form__text"
          value={title}
          onChange={handleTitle}
        />
        <label htmlFor="modal-form__descr">Description</label>
        <textarea
          name="modal-form__descr"
          id="modal-form__descr"
          cols={30}
          rows={10}
          value={description}
          onChange={handleDescription}
        ></textarea>
        <div className="modal-form__buttons">
          {visibleEditModal ? (
            <>
              <Button
                btnText="Edit"
                btnClass="button button--blue"
                onClickBtn={() => editTodo(currIDForEdit, title, description)}
              />
              <Button
                btnText="Cancel"
                btnClass="button button--red"
                onClickBtn={onCloseEditModal}
              />
            </>
          ) : (
            <>
              <Button
                btnText="Create"
                btnClass="button button--blue"
                onClickBtn={() => createTodo(title, description)}
              />
              <Button
                btnText="Cancel"
                btnClass="button button--red"
                onClickBtn={onClose}
              />
            </>
          )}
        </div>
      </form>
    </div>
  );
};
