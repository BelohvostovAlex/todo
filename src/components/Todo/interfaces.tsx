import React from 'react';
import { ITodo } from '../../models/ITodo';

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
  status: string;
  deleteTodo: (id: string) => void;
  availiableOptions: string[];
  handleTodoProgress: (id: string, progress: string) => void;
  todos: ITodo[];
}
