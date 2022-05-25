import React from 'react';
import { RoundButtonProps } from './interfaces';

import './roundButton.scss';

export const RoundButton: React.FC<RoundButtonProps> = ({
  text,
  className,
  type,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick} type={'button' || type}>
      {text}
    </button>
  );
};
