import { ITodo } from '../../../models/ITodo';
import { ModalActionType, TodosActionEnum, TodosState } from './types';
import produce from 'immer';

const initialState: TodosState = {
  todos: [] as ITodo[],
  isError: '',
  filter: 'All',
};

export const todosReducer = (
  state = initialState,
  action: ModalActionType
): TodosState => {
  switch (action.type) {
    case TodosActionEnum.SET_TODOS:
      return produce(state, (draftState) => {
        draftState.isError = '';
        draftState.todos = action.payload;
      });

    case TodosActionEnum.SET_FILTER:
      return produce(state, (draftState) => {
        draftState.isError = '';
        draftState.filter = action.payload;
      });

    case TodosActionEnum.SET_ERROR:
      return produce(state, (draftState) => {
        draftState.isError = action.payload;
      });

    case TodosActionEnum.ADD_TODO:
      return produce(state, (draftState) => {
        draftState.isError = '';
        draftState.todos.push(action.payload);
      });

    case TodosActionEnum.DELETE_TODO:
      return produce(state, (draftState) => {
        draftState.isError = '';
        draftState.todos.filter((todo) => todo.id !== action.payload);
      });

    case TodosActionEnum.UPDATE_TODO:
      return produce(state, (draftState) => {
        draftState.isError = '';
        const todo = draftState.todos.find(
          (item) => item.id === action.payload.id
        );
        todo!.title = action.payload.title;
        todo!.description = action.payload.description;
      });

    case TodosActionEnum.UPDATE_TODO_STATUS:
      return produce(state, (draftState) => {
        draftState.isError = '';
        const todo = draftState.todos.find(
          (item) => item.id === action.payload.id
        );
        todo!.status = action.payload.status;
      });

    default:
      return state;
  }
};
