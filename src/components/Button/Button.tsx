import React from 'react';

import './buttons.scss';
import { ButtonProps, ButtonTypes } from './interfaces';

export const Button: React.FC<ButtonProps> = ({
  text,
  type = ButtonTypes.BUTTON,
  className,
  onClick,
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};
