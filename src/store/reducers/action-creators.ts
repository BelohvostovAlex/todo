import { modalActionCreators } from './modalReducer/action-creators';
import { todosActionCreators } from './todosReducer/action-creators';

export const allActionCreators = {
  ...modalActionCreators,
  ...todosActionCreators,
};
