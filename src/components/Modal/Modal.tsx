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
  onCloseModalWithEditFeature,
  createTodo,
  editTodo,
  currIDForEdit,
  type,
}) => {
  return (
    <div className="modal">
      <form className="modal-form">
        <RoundButton
          text="X"
          className="round-btn round-btn--gray round-btn--toRight"
          onClick={type === 'edit' ? onCloseModalWithEditFeature : onClose}
        />
        <label className="modal-form__label" htmlFor="modal-form-text">
          Title
        </label>
        <input
          type="text"
          name="modal-form-text"
          id="modal-form-text"
          placeholder="type some text.."
          value={title}
          onChange={handleTitle}
        />
        <label className="modal-form__label" htmlFor="modal-form-descr">
          Description
        </label>
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
          {type === 'edit' ? (
            <>
              <Button
                text="Edit"
                className="button button--blue"
                onClick={() => editTodo(currIDForEdit, title, description)}
              />
              <Button
                text="Cancel"
                className="button button--red"
                onClick={onCloseModalWithEditFeature}
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
