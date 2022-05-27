import { ModalActionCreators } from './modalReducer/action-creators';
import { TodosActionCreators } from './todosReducer/action-creators';

export const allActionCreators = {
  ...ModalActionCreators,
  ...TodosActionCreators,
};
