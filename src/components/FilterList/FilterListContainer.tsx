import React from 'react';
import { FilterList } from './FilterList';
import { FilterListContainerProps } from './interfaces';

const filterValuesList = ['All', 'Todo', 'In progress', 'Done'];

export const FilterListContainer: React.FC<FilterListContainerProps> = ({
  filterTodos,
  currentFilter,
}) => {
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
