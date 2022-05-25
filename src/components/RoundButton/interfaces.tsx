import { ButtonTypes } from '../Button/interfaces';

export interface RoundButtonProps {
  text: string;
  className: string;
  type?: ButtonTypes;
  onClick?: () => void;
}
