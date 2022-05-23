import React, { useState } from 'react';
import { FilterList } from './FilterList';
import { FilterListContainerProps } from './interfaces';

export const FilterListContainer: React.FC<FilterListContainerProps> = ({
  filterTodos,
  currentFilter,
}) => {
  const [filterValuesList, setFilterValuesList] = useState([
    'All',
    'Todo',
    'In progress',
    'Done',
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
