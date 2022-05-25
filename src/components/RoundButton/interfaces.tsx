import { ButtonTypes } from '../Button/interfaces';

export interface RoundButtonProps {
  text: string;
  type?: ButtonTypes;
  className: string;
  onClick?: () => void;
}
