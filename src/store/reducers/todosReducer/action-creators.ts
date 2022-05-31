import { AppDispatch } from '../..';
import { IPureTodo, ITodo } from '../../../models/ITodo';
import { WebService } from '../../../services/WebService';
import {
  TodosActionEnum,
  SetTodosActionTodos,
  AddTodoActionTodos,
  SetErrorActionTodos,
  DeleteTodoActionTodos,
  UpdateTodoActionTodos,
  UpdateTodoStatusActionTodos,
  SetFilterActionTodos,
} from './types';

const webService = new WebService()

export const TodosActionCreators = {
  setTodos: (todos: ITodo[]): SetTodosActionTodos => ({
    type: TodosActionEnum.SET_TODOS,
    payload: todos,
  }),

  fetchTodos: () => async (dispatch: AppDispatch) => {
    try {
      const data = await webService.getData()
      dispatch(TodosActionCreators.setTodos(data));
    } catch (error) {
      dispatch(TodosActionCreators.setError('Error, cant fetch the data...'));
    }
  },

  setFilter: (filter: string): SetFilterActionTodos => ({
    type: TodosActionEnum.SET_FILTER,
    payload: filter
  }),

  setError: (payload: string): SetErrorActionTodos => ({
    type: TodosActionEnum.SET_ERROR,
    payload,
  }),

  addTodo: (todo: ITodo): AddTodoActionTodos => ({
    type: TodosActionEnum.ADD_TODO,
    payload: todo,
  }),

  addTodoActionCreator: (todo: IPureTodo) => async (dispatch: AppDispatch) => {
    try {
      const data = await webService.postData(todo)
      dispatch(TodosActionCreators.addTodo(data));
    } catch (error) {
      dispatch(TodosActionCreators.setError('Error, cant create a todo...'));
    }
  },

  deleteTodo: (id: string): DeleteTodoActionTodos => ({
    type: TodosActionEnum.DELETE_TODO,
    payload: id,
  }),

  deleteTodoActionCreator: (todo: ITodo) => async (dispatch: AppDispatch) => {
    try {
      await webService.deleteData(todo)
      dispatch(TodosActionCreators.deleteTodo(todo.id));
    } catch (error) {
      dispatch(TodosActionCreators.setError('Error, can`t delete the todo...'));
    }
  },

  updateTodo: (todo: ITodo): UpdateTodoActionTodos => ({
    type: TodosActionEnum.UPDATE_TODO,
    payload: todo,
  }),

  updateTodoActionCreator:
    (payload: ITodo) =>
    async (dispatch: AppDispatch) => {
      try {
        const data = await webService.updateData(payload)
        dispatch(TodosActionCreators.updateTodo(data!));
      } catch (error) {
        dispatch(
          TodosActionCreators.setError('Error, can`t update the todo...')
        );
      }
    },

  updateTodoStatus: (todo: ITodo): UpdateTodoStatusActionTodos => ({
    type: TodosActionEnum.UPDATE_TODO_STATUS,
    payload: todo,
  }),

  updateTodoStatusActionCreator:
    (payload: ITodo) =>
    async (dispatch: AppDispatch) => {
      try {
        const data = await webService.updateData(payload)
        dispatch(TodosActionCreators.updateTodoStatus(data));
      } catch (error) {
        dispatch(
          TodosActionCreators.setError('Error, can`t update the todo status...')
        );
      }
    },
};
