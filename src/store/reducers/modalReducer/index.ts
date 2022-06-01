import { ModalActionEnum, ModalAction, ModalState } from './types';

const initialState: ModalState = {
  isVisible: false,
  type: '',
};

export const modalReducer = (
  state = initialState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case ModalActionEnum.SET_VISIBLE:
      return { ...state, isVisible: !state.isVisible };
    case ModalActionEnum.SET_TYPE:
      return { ...state, type: action.payload };
    default:
      return state;
  }
};
