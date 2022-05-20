import { ITodo } from '../../models/ITodo';

export interface TodoPageProps {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
  visibleModal: boolean;
  visibleModalWithEditFeature: boolean;
  handleVisibleModal: () => void;
  handleVisibleModalWithEditFeature: (id: string) => void;
  onCloseModalWithEditFeature: () => void;
  editTodo: (id: string, title: string, description: string) => void;
  currIDForEdit: string;
  hasTodo: boolean;
  modalType: string;
}
