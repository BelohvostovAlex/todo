export enum ButtonTypes {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
}

export interface ButtonProps {
  text: string;
  className: string;
  type: ButtonTypes;
  onClick?: () => void;
}
