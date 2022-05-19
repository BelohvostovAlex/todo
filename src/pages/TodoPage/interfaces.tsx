import { ITodo } from '../../models/ITodo';

export interface TodoPageProps {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
  visibleModal: boolean;
  handleVisibleModal: () => void;
}
