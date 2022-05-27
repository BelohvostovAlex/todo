import React from 'react';
import { FilterListProps } from './interfaces';

import './filterList.scss';
import { FilterItem } from '../FilterItem.tsx/FilterItem';

export const FilterList: React.FC<FilterListProps> = ({
  filterValuesList,
  filterTodos,
  currentFilter,
}) => {
  return (
    <ul className="filter-list">
      {filterValuesList.map((title) => (
        <FilterItem
          key={title}
          title={title}
          className={
            currentFilter === title
              ? 'filter-item filter-item--active'
              : 'filter-item'
          }
          onClick={() => filterTodos(title)}
        />
      ))}
    </ul>
  );
};
