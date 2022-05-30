import { IPureTodo } from '../../models/ITodo';

export interface SingleTodoPageProps {
  handleVisibleModal: () => void;
  onClose: () => void;
  title: string;
  description: string;
  modalType: string;
  initialValue: {
    title: string;
    description: string;
    status: string;
  };
  handleSubmit: (todo: IPureTodo) => void;
  visibleModal: boolean;
  availiableOptions: string[];
  selectedOption: string;
  handleOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  classes: string;
}
