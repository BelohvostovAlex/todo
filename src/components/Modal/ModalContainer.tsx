import React from 'react';

import { useModalForm } from '../../hooks/useModalForm';
import { ModalContainerProps } from './interfaces';
import { Modal } from './Modal';

export const ModalContainer: React.FC<ModalContainerProps> = ({
  onClose,
  onSubmit,
  modalType,
  initialValue,
}) => {
  const [title, description, handleTitle, handleDescription] =
    useModalForm(initialValue);

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
