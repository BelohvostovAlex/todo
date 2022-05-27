import {
  SetVisibleActionModal,
  SetTypeActionModal,
  ModalActionEnum,
} from './types';

export const ModalActionCreators = {
  setVisible: (visible: boolean): SetVisibleActionModal => ({
    type: ModalActionEnum.SET_VISIBLE,
    payload: visible,
  }),
  setType: (type: string): SetTypeActionModal => ({
    type: ModalActionEnum.SET_TYPE,
    payload: type,
  }),
};
