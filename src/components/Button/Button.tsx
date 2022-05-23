import React from 'react';

import './buttons.scss';
import { ButtonProps } from './interfaces';

export const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button className={className} type="button" onClick={onClick}>
      {text}
    </button>
  );
};
