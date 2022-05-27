import { ITodo } from '../../../models/ITodo';
import { ModalActionType, TodosActionEnum, TodosState } from './types';

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
      return { ...state, isError: '', todos: action.payload };
    case TodosActionEnum.SET_FILTER:
      return { ...state, isError: '', filter: action.payload };
    case TodosActionEnum.SET_ERROR:
      return { ...state, isError: action.payload };
    case TodosActionEnum.ADD_TODO:
      return { ...state, isError: '', todos: [...state.todos, action.payload] };
    case TodosActionEnum.DELETE_TODO:
      return {
        ...state,
        isError: '',
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TodosActionEnum.UPDATE_TODO:
      return {
        ...state,
        isError: '',
        todos: state.todos.map((todo) => {
          return todo.id === action.payload.id
            ? {
                ...todo,
                title: action.payload.title,
                description: action.payload.description,
              }
            : todo;
        }),
      };
    case TodosActionEnum.UPDATE_TODO_STATUS:
      return {
        ...state,
        isError: '',
        todos: state.todos.map((todo) => {
          return todo.id === action.payload.id
            ? {
                ...todo,
                status: action.payload.status,
              }
            : todo;
        }),
      };
    default:
      return state;
  }
};
