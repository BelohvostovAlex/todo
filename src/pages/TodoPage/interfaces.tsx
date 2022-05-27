import { IPureTodo, ITodo } from '../../models/ITodo';

export interface TodoPageProps {
  todos: ITodo[];
  handleSubmit: (todo: IPureTodo) => void;
  deleteTodo: (id: string) => void;
  visibleModal: boolean;
  handleVisibleModal: (id?: string) => void;
  hasTodo: boolean;
  filterTodos: (title: string) => void;
  availiableOptions: string[];
  handleTodoProgress: (id: string, progress: string) => void;
  currentFilter: string;
  modalType: string;
  initialValue: {
    title: string;
    description: string;
    status: string;
  };
}
