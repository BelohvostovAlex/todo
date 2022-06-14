import { SingleTodoPageContainer } from '../../pages/SingleTodoPage';
import { TodoPageContainer } from '../../pages/TodoPage';

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum pathesEnum {
  TODOS = '/todos',
  SINGLE_TODO_PAGE = '/todos/:id',
}

export const publicRoutes: IRoute[] = [
  { path: pathesEnum.TODOS, element: TodoPageContainer },
  { path: pathesEnum.SINGLE_TODO_PAGE, element: SingleTodoPageContainer },
];
