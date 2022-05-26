import React from 'react';
import { ButtonTypes } from '../Button/interfaces';
import { RoundButtonProps } from './interfaces';

import './roundButton.scss';

export const RoundButton: React.FC<RoundButtonProps> = ({
  text,
  className,
  type = ButtonTypes.BUTTON,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {text}
    </button>
  );
};
