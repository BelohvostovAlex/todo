import React from 'react';
import { ITodoFull } from '../../models/ITodo';

export interface TodoProps {
  id: string;
  title: string;
  description: string;
  deleteTodo: () => void;
  avaliableOptions: string[];
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
  avaliableOptions: string[];
  handleTodoProgress: (id: string, progress: string) => void;
  todos: ITodoFull[];
}
