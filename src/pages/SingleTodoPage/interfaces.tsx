import { IPureTodo } from '../../models/ITodo';

export interface SingleTodoPageProps {
  handleVisibleModal: () => void;
  onClose: () => void;
  title: string;
  description: string;
  initialValue: {
    title: string;
    description: string;
    status: string;
  };
  handleSubmit: (todo: IPureTodo) => void;
  visibleModal: boolean;
  selectedOption: string;
  handleOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  classes: string;
}
