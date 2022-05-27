import React from 'react';

import './filterItem.scss';
import { FilterItemProps } from './interfaces';

export const FilterItem: React.FC<FilterItemProps> = ({
  title,
  className,
  onClick,
}) => {
  return (
    <li className={className} onClick={onClick}>
      {title}
    </li>
  );
};
