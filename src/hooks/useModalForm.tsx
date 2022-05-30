import { useInput } from './useInput';

export const useModalForm = (initialValue: {
  title: string;
  description: string;
  status: string;
}): [
  string,
  string,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
] => {
  const [title, handleTitle] = useInput(initialValue.title);
  const [description, handleDescription] = useInput(initialValue.description);

  return [title, description, handleTitle, handleDescription];
};
