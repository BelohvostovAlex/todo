import React from 'react';

import { useInput } from '../../hooks/useInput';
import { ModalContainerProps } from './interfaces';
import { Modal } from './Modal';

export const ModalContainer: React.FC<ModalContainerProps> = ({
  onClose,
  availiableOptions,
  onSubmit,
  modalType,
  initialValue,
}) => {
  const {
    title: initialTitle,
    description: initialDescription,
    status,
  } = initialValue;

  const [title, handleTitle] = useInput(initialTitle);
  const [description, handleDescription] = useInput(initialDescription);

  const handleSubmit = () => {
    onSubmit({
      title,
      description,
      status,
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
