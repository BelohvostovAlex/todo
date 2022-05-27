import { ITodo } from '../../../models/ITodo';

export interface TodosState {
  todos: ITodo[];
  isError: string;
  filter: string
}

export enum TodosActionEnum {
  SET_TODOS = 'SET_TODOS',
  SET_ERROR = 'SET_ERROR',
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  UPDATE_TODO_STATUS = 'UPDATE_TODO_STATUS',
  SET_FILTER = 'SET_FILTER'
}

export interface SetTodosActionTodos {
  type: TodosActionEnum.SET_TODOS;
  payload: ITodo[];
}

export interface SetErrorActionTodos {
  type: TodosActionEnum.SET_ERROR;
  payload: string;
}

export interface AddTodoActionTodos {
  type: TodosActionEnum.ADD_TODO;
  payload: ITodo;
}

export interface DeleteTodoActionTodos {
  type: TodosActionEnum.DELETE_TODO;
  payload: string;
}

export interface UpdateTodoActionTodos {
  type: TodosActionEnum.UPDATE_TODO;
  payload: {
    id?: string | undefined;
    status?: string | undefined;
    title: string;
    description: string;
  };
}

export interface UpdateTodoStatusActionTodos {
  type: TodosActionEnum.UPDATE_TODO_STATUS;
  payload: ITodo;
}

export interface SetFilterActionTodos {
  type: TodosActionEnum.SET_FILTER
  payload: string
}

export type ModalActionType =
  | SetTodosActionTodos
  | SetErrorActionTodos
  | AddTodoActionTodos
  | DeleteTodoActionTodos
  | UpdateTodoActionTodos
  | UpdateTodoStatusActionTodos
  | SetFilterActionTodos;
