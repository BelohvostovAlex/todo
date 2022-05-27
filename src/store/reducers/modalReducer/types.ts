export interface ModalState {
  isVisible: boolean;
  type: string;
}

export enum ModalActionEnum {
  SET_VISIBLE = 'SET_VISIBLE',
  SET_TYPE = 'SET_TYPE',
}

export interface SetVisibleActionModal {
  type: ModalActionEnum.SET_VISIBLE;
  payload: boolean;
}

export interface SetTypeActionModal {
  type: ModalActionEnum.SET_TYPE;
  payload: string;
}

export type ModalAction = SetVisibleActionModal | SetTypeActionModal;
