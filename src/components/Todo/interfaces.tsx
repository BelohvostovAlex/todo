export interface TodoProps {
  id: string;
  title: string;
  description: string;
  deleteTodo: (id: string) => void;
  handleEditVisibleModal: (id: string) => void;
}
