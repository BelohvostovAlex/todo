export interface FilterListContainerProps {
  filterTodos: (title: string) => void;
  currentFilter: string;
}

export interface FilterListProps {
  filterValuesList: string[];
  filterTodos: (title: string) => void;
  currentFilter: string;
}
