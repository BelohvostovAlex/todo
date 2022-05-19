import React from 'react';

import './buttons.scss';
import { ButtonProps } from './interfaces';

export const Button: React.FC<ButtonProps> = ({
  btnText,
  btnClass,
  onClickBtn,
}) => {
  return (
    <button className={btnClass} type="button" onClick={onClickBtn}>
      {btnText}
    </button>
  );
};
