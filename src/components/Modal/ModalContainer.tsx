import React from 'react';

import { useInput } from '../../hooks/useInput';
import { ModalContainerProps } from './interfaces';
import { Modal } from './Modal';

export const ModalContainer: React.FC<ModalContainerProps> = ({
  onClose,
  onSubmit,
  modalType,
  initialValue,
}) => {
  const { title: initialTitle, description: initialDescription } = initialValue;

  const [title, handleTitle] = useInput(initialTitle);
  const [description, handleDescription] = useInput(initialDescription);
  //пока не вынес useInput в Modal, т.к. использую в функции handleSubmit его value

  const handleSubmit = () => {
    onSubmit({
      title,
      description,
    });
  };

  return (
    <Modal
      title={title}
      handleTitle={handleTitle}
      description={description}
      handleDescription={handleDescription}
      onClose={onClose}
      onSubmit={handleSubmit}
      type={modalType}
    />
  );
};
