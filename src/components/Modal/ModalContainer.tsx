import React from 'react';
import { v4 } from 'uuid';

import { useInput } from '../../hooks/useInput';
import { ModalContainerProps } from './interfaces';
import { Modal } from './Modal';

export const ModalContainer: React.FC<ModalContainerProps> = ({
  onClose,
  addTodo,
  visibleEditModal,
  onCloseEditModal,
  editTodo,
  currIDForEdit,
}) => {
  const [title, handleTitle] = useInput();
  const [description, handleDescription] = useInput();
  const createTodo = (title: string, description: string) => {
    addTodo({ id: v4(), title, description });
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
      visibleEditModal={visibleEditModal}
      onCloseEditModal={onCloseEditModal}
      editTodo={editTodo}
      currIDForEdit={currIDForEdit}
    />
  );
};
