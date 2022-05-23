import React from 'react';
import { RoundButtonProps } from './interfaces';

import './roundButton.scss';

export const RoundButton: React.FC<RoundButtonProps> = ({
  text,
  className,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};
