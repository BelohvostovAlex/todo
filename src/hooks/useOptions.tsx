import { useState } from 'react';
import { ITodo } from '../models/ITodo';
import { useHandlers } from './useHandlers';

export const useOptions = (
  initialValue: ITodo,
  id: string
): [string, (e: React.ChangeEvent<HTMLSelectElement>) => void] => {
  const { handleTodoProgress } = useHandlers();
  const [selectedOption, setSelectedOption] = useState(initialValue.status);

  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedOption(value);

    handleTodoProgress(id!, value);
  };
  return [selectedOption, handleOption];
};
