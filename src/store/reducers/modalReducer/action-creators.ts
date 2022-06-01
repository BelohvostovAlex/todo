import {
  SetVisibleActionModal,
  SetTypeActionModal,
  ModalActionEnum,
} from './types';

const setVisible = (visible: boolean): SetVisibleActionModal => ({
  type: ModalActionEnum.SET_VISIBLE,
  payload: visible,
})

const setType = (type: string): SetTypeActionModal => ({
  type: ModalActionEnum.SET_TYPE,
  payload: type,
})

export const modalActionCreators = {
  setVisible,
  setType
};
