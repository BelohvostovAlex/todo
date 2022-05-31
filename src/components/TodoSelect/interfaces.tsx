export interface TodoSelectProps {
  selectedOption: string;
  handleOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  classes: string;
}
