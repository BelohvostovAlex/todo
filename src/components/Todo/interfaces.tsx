import React from 'react';

export interface TodoProps {
  id: string;
  title: string;
  descr: string;
  deleteTodo: (id: string) => void;
  handleEditVisibleModal: (id: string) => void;
  avaliableOptions: string[];
  selectedOption: string;
  handleOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  classes: string;
}

export interface TodoContainerProps {
  id: string;
  title: string;
  descr: string;
  deleteTodo: (id: string) => void;
  handleEditVisibleModal: (id: string) => void;
}
