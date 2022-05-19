export interface TodoProps {
  id: string;
  title: string;
  descr: string;
  deleteTodo: (id: string) => void;
  handleEditVisibleModal: (id: string) => void;
}
