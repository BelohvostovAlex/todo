export interface TodoProps {
  id: string;
  title: string;
  description: string;
  deleteTodo: (id: string) => void;
  handleVisibleModalWithEditFeature: (id: string) => void;
}
