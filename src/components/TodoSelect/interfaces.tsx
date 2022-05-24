export interface TodoSelectProps {
  avaliableOptions: string[];
  selectedOption: string;
  handleOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  classes: string;
}
