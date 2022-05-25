import { ITodo, IPureTodo } from '../../models/ITodo';

export interface TodoPageProps {
  todos: ITodo[];
  addTodo: (todo: IPureTodo) => void;
  deleteTodo: (id: string) => void;
  visibleModal: boolean;
  handleVisibleModal: () => void;
  hasTodo: boolean;
  filterTodos: (title: string) => void;
  availiableOptions: string[];
  handleTodoProgress: (id: string, progress: string) => void;
  currentFilter: string;
}
