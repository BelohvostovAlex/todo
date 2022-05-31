import React from 'react';
import { IPureTodo } from '../../models/ITodo';

export interface ModalProps {
  title: string;
  description: string;
  handleTitle: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleDescription: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClose: () => void;
  onSubmit: () => void;
  type: string;
}

export interface ModalContainerProps {
  onClose: () => void;
  onSubmit: (todo: IPureTodo) => void;
  modalType: string;
  initialValue: {
    title: string;
    description: string;
    status: string;
  };
}
