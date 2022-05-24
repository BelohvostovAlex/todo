import React from 'react';
import { ITodo } from '../../models/ITodo';

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
}

export interface ModalContainerProps {
  onClose: () => void;
  addTodo: (todo: ITodo) => void;
}
