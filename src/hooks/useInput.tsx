import React, { useState } from 'react';

export const useInput = (
  initialValue: string = ''
): [
  string,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
] => {
  const [value, setValue] = useState(initialValue);

  const handleValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  return [value.length > 0 ? value : 'write someting, please', handleValue];
};
