import React from 'react';

import { useInput } from '../../hooks/useInput';
import { ModalContainerProps } from './interfaces';
import { Modal } from './Modal';

export const ModalContainer: React.FC<ModalContainerProps> = ({
  onClose,
  addTodo,
  availiableOptions,
}) => {
  const [title, handleTitle] = useInput();
  const [description, handleDescription] = useInput();

  const createTodo = () => {
    addTodo({
      title: title,
      description: description,
      status: availiableOptions[0],
    });

    onClose();
  };
  return (
    <Modal
      title={title}
      handleTitle={handleTitle}
      description={description}
      handleDescription={handleDescription}
      onClose={onClose}
      onSubmit={createTodo}
    />
  );
};
