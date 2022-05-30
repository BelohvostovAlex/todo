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
    setSelectedOption(e.target.value);

    handleTodoProgress(id!, e.target.value);
  };
  return [selectedOption, handleOption];
};
