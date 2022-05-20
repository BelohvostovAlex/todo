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
          text="X"
          className="round-btn round-btn--gray round-btn--toRight"
          onClick={visibleEditModal ? onCloseEditModal : onClose}
        />
        <label htmlFor="modal-form-text">Title</label>
        <input
          type="text"
          name="modal-form-text"
          id="modal-form-text"
          placeholder="type some text.."
          value={title}
          onChange={handleTitle}
        />
        <label htmlFor="modal-form-descr">Description</label>
        <textarea
          name="modal-form-descr"
          id="modal-form-descr"
          cols={30}
          rows={10}
          placeholder="type some description.."
          value={description}
          onChange={handleDescription}
        ></textarea>
        <div className="modal-form__buttons">
          {visibleEditModal ? (
            <>
              <Button
                text="Edit"
                className="button button--blue"
                onClick={() => editTodo(currIDForEdit, title, description)}
              />
              <Button
                text="Cancel"
                className="button button--red"
                onClick={onCloseEditModal}
              />
            </>
          ) : (
            <>
              <Button
                text="Create"
                className="button button--blue"
                onClick={createTodo}
              />
              <Button
                text="Cancel"
                className="button button--red"
                onClick={onClose}
              />
            </>
          )}
        </div>
      </form>
    </div>
  );
};
