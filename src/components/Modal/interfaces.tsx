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
  visibleEditModal: boolean;
  onCloseEditModal: () => void;
  editTodo: (id: string, title: string, description: string) => void;
  currIDForEdit: string;
  createTodo: () => void;
}

export interface ModalContainerProps {
  onClose: () => void;
  addTodo: (todo: ITodo) => void;
  visibleEditModal: boolean;
  onCloseEditModal: () => void;
  editTodo: (id: string, title: string, description: string) => void;
  currIDForEdit: string;
}
