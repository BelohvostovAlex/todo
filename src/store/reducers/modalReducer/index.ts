import produce from 'immer'
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
      return produce(state, (draftState) => {
        draftState.isVisible = !draftState.isVisible
      });
    case ModalActionEnum.SET_TYPE:
      return produce(state, (draftState) => {
        draftState.type = action.payload
      });
    default:
      return state;
  }
};
