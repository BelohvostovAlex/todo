export interface TodoProps {
  id: string;
  title: string;
  descr: string;
  deleteTodo: (id: string) => void;
}
