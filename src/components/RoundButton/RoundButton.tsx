import React from 'react';
import { RoundButtonProps } from './interfaces';

import './roundButton.scss';

export const RoundButton: React.FC<RoundButtonProps> = ({
  text,
  className,
  onClick,
  type,
}) => {
  return (
    <button className={className} type={'button' || type} onClick={onClick}>
      {text}
    </button>
  );
};
