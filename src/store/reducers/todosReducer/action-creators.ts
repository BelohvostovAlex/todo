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

const webService = new WebService();

const setTodos = (todos: ITodo[]): SetTodosActionTodos => ({
  type: TodosActionEnum.SET_TODOS,
  payload: todos,
});

const fetchTodos = () => async (dispatch: AppDispatch) => {
  try {
    const data = await webService.getData();
    dispatch(setTodos(data));
  } catch (error) {
    dispatch(setError('Error, cant fetch the data...'));
  }
};

const setFilter = (filter: string): SetFilterActionTodos => ({
  type: TodosActionEnum.SET_FILTER,
  payload: filter,
});

const setError = (payload: string): SetErrorActionTodos => ({
  type: TodosActionEnum.SET_ERROR,
  payload,
});

const addTodo = (todo: ITodo): AddTodoActionTodos => ({
  type: TodosActionEnum.ADD_TODO,
  payload: todo,
});

const addTodoActionCreator =
  (todo: IPureTodo) => async (dispatch: AppDispatch) => {
    try {
      const data = await webService.postData(todo);
      dispatch(addTodo(data));
    } catch (error) {
      dispatch(setError('Error, cant create a todo...'));
    }
  };

const deleteTodo = (id: string): DeleteTodoActionTodos => ({
  type: TodosActionEnum.DELETE_TODO,
  payload: id,
});

const deleteTodoActionCreator =
  (todo: ITodo) => async (dispatch: AppDispatch) => {
    try {
      await webService.deleteData(todo);
      dispatch(deleteTodo(todo.id));
    } catch (error) {
      dispatch(setError('Error, can`t delete the todo...'));
    }
  };

const updateTodo = (todo: ITodo): UpdateTodoActionTodos => ({
  type: TodosActionEnum.UPDATE_TODO,
  payload: todo,
});

const updateTodoActionCreator =
  (payload: ITodo) => async (dispatch: AppDispatch) => {
    try {
      const data = await webService.updateData(payload);
      dispatch(updateTodo(data!));
    } catch (error) {
      dispatch(setError('Error, can`t update the todo...'));
    }
  };

const updateTodoStatus = (todo: ITodo): UpdateTodoStatusActionTodos => ({
  type: TodosActionEnum.UPDATE_TODO_STATUS,
  payload: todo,
});

const updateTodoStatusActionCreator =
  (payload: ITodo) => async (dispatch: AppDispatch) => {
    try {
      const data = await webService.updateData(payload);
      dispatch(updateTodoStatus(data));
    } catch (error) {
      dispatch(setError('Error, can`t update the todo status...'));
    }
  };

export const todosActionCreators = {
  setTodos,
  fetchTodos,
  setFilter,
  setError,
  addTodo,
  addTodoActionCreator,
  deleteTodo,
  deleteTodoActionCreator,
  updateTodo,
  updateTodoActionCreator,
  updateTodoStatus,
  updateTodoStatusActionCreator,
};
