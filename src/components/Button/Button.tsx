import React from 'react';

import './buttons.scss';
import { ButtonProps } from './interfaces';

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  className,
  onClick,
}) => {
  return (
    <button className={className} type={'button' || type} onClick={onClick}>
      {text}
    </button>
  );
};
