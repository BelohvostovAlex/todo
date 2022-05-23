import React from 'react';
import { PageHeaderProps } from './interfaces';

import './pageHeader.scss';

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="page-header">
      <h2 className="page-title">{title}</h2>
    </div>
  );
};
