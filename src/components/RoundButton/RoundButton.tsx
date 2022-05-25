import React from 'react';
import { RoundButtonProps } from './interfaces';
import { ButtonTypes } from '../Button/interfaces';

import './roundButton.scss';

export const RoundButton: React.FC<RoundButtonProps> = ({
  text,
  className,
  onClick,
  type = ButtonTypes.BUTTON,
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};
