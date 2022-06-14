import { useInput } from './useInput';

interface InitialValue {
  title: string;
  description: string;
  status: string;
}

type UseModalForm = [
  string,
  string,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
];

export const useModalForm = (initialValue: InitialValue): UseModalForm => {
  const [title, handleTitle] = useInput(initialValue.title);
  const [description, handleDescription] = useInput(initialValue.description);

  return [title, description, handleTitle, handleDescription];
};
