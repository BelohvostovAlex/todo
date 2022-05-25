import { IPureTodo, ITodo } from '../../models/ITodo';

export interface TodoPageProps {
  todos: ITodo[];
  addTodo: (todo: IPureTodo) => void;
  deleteTodo: (id: string) => void;
  visibleModal: boolean;
  handleVisibleModal: () => void;
  handleVisibleModalWithEditFeature: (id: string) => void;
  editTodo: (todo: IPureTodo) => void;
  hasTodo: boolean;
  modalType: string;
  initialValue: {
    title: string;
    description: string;
  };
}
