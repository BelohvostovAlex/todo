export interface TodoProps {
  id: string;
  title: string;
  description: string;
  deleteTodo: () => void;
  handleVisibleModalWithEditFeature: () => void;
}
