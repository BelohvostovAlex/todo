import { ITodo, ITodoFull } from '../../models/ITodo';

export interface TodoPageProps {
  todos: ITodoFull[];
  addTodo: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
  visibleModal: boolean;
  handleVisibleModal: () => void;
  hasTodo: boolean;
  filterTodos: (title: string) => void;
  avaliableOptions: string[];
  handleTodoProgress: (id: string, progress: string) => void;
  currentFilter: string;
}
