import React from 'react';
import { Button } from '../Button';
import { RoundButton } from '../RoundButton/RoundButton';
import { ModalProps } from './interfaces';

import { ButtonTypes } from '../Button/interfaces';

import './modal.scss';

export const Modal: React.FC<ModalProps> = ({
  title,
  handleTitle,
  description,
  handleDescription,
  onClose,
  onSubmit,
  type,
}) => {
  return (
    <div className="modal">
      <form className="modal-form" onSubmit={onSubmit}>
        <RoundButton
          text="X"
          className="round-btn round-btn--gray round-btn--toRight"
          type={ButtonTypes.BUTTON}
          onClick={onClose}
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
          <Button
            text={type === 'create' ? 'Create' : 'Edit'}
            type={ButtonTypes.SUBMIT}
            className="button button--blue"
          />
          <Button
            text="Cancel"
            type={ButtonTypes.BUTTON}
            className="button button--red"
            onClick={onClose}
          />
        </div>
      </form>
    </div>
  );
};
