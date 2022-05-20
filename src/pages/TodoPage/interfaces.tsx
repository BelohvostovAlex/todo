import { ITodo } from '../../models/ITodo';

export interface TodoPageProps {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
  visibleModal: boolean;
  visibleEditModal: boolean;
  handleVisibleModal: () => void;
  handleEditVisibleModal: (id: string) => void;
  onCloseEditVisibleModal: () => void;
  editTodo: (id: string, title: string, description: string) => void;
  currIDForEdit: string;
  hasTodo: boolean;
}
