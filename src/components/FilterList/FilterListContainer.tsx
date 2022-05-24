import React, { useState } from 'react';
import { FilterList } from './FilterList';
import { FilterListContainerProps } from './interfaces';

export const FilterListContainer: React.FC<FilterListContainerProps> = ({
  filterTodos,
  currentFilter,
}) => {
  const [filterValuesList, setFilterValuesList] = useState([
    'all',
    'todo',
    'in_progress',
    'done',
  ]);

  const handleFilterList = (title: string) => {
    filterTodos(title);
  };

  return (
    <FilterList
      filterValuesList={filterValuesList}
      filterTodos={handleFilterList}
      currentFilter={currentFilter}
    />
  );
};
