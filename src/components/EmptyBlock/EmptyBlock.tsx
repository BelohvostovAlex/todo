import React from 'react';
import { EmptyBlockProps } from './interfaces';

import './emptyBlock.scss';

export const EmptyBlock: React.FC<EmptyBlockProps> = ({ text }) => {
  return (
    <div className="empty-block">
      <h2 className="empty-block__title">{text}</h2>
    </div>
  );
};
