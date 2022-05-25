import React from 'react';

export interface TodoProps {
  id: string;
  title: string;
  description: string;
  deleteTodo: () => void;
  availiableOptions: string[];
  selectedOption: string;
  handleOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  classes: string;
}

export interface TodoContainerProps {
  id: string;
  title: string;
  description: string;
  deleteTodo: (id: string) => void;
}
