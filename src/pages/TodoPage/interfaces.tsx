import { IPureTodo, ITodo } from '../../models/ITodo';

export interface TodoPageProps {
  todos: ITodo[];
  handleSubmit: (todo: IPureTodo) => void;
  deleteTodo: (id: string) => void;
  visibleModal: boolean;
  handleVisibleModal: (id?: string) => void;
  hasTodo: boolean;
  modalType: string;
  initialValue: {
    title: string;
    description: string;
  };
}
