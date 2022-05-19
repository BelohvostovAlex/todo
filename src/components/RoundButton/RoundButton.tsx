import React from 'react';
import { RoundButtonProps } from './interfaces';

import './roundButton.scss';

export const RoundButton: React.FC<RoundButtonProps> = ({
  btnText,
  btnClass,
  onClickBtn,
}) => {
  return (
    <button className={btnClass} onClick={onClickBtn}>
      {btnText}
    </button>
  );
};
