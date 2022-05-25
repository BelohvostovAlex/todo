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
  addTodo: (todo: IPureTodo) => void;
  editTodo: (title: string, description: string) => void;
  modalType: string;
  initialValue: {
    title: string;
    description: string;
  };
}
