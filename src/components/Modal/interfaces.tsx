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
  onCloseModalWithEditFeature: () => void;
  editTodo: (id: string, title: string, description: string) => void;
  currIDForEdit: string;
  createTodo: () => void;
  type: string;
}

export interface ModalContainerProps {
  onClose: () => void;
  addTodo: (todo: ITodo) => void;
  onCloseModalWithEditFeature: () => void;
  editTodo: (id: string, title: string, description: string) => void;
  currIDForEdit: string;
  modalType: string;
  initialValueForModalWithEditFeature: {
    title: string;
    description: string;
  };
}
