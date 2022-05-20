import React from 'react';
import { v4 } from 'uuid';

import { useInput } from '../../hooks/useInput';
import { ModalContainerProps } from './interfaces';
import { Modal } from './Modal';

export const ModalContainer: React.FC<ModalContainerProps> = ({
  onClose,
  addTodo,
  onCloseModalWithEditFeature,
  editTodo,
  currIDForEdit,
  modalType,
}) => {
  const [title, handleTitle] = useInput();
  const [description, handleDescription] = useInput();

  const createTodo = () => {
    addTodo({ id: v4(), title: title, description: description });

    onClose();
  };

  return (
    <Modal
      title={title}
      handleTitle={handleTitle}
      description={description}
      handleDescription={handleDescription}
      onClose={onClose}
      createTodo={createTodo}
      onCloseModalWithEditFeature={onCloseModalWithEditFeature}
      editTodo={editTodo}
      currIDForEdit={currIDForEdit}
      type={modalType}
    />
  );
};
