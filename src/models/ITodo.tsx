export interface IPureTodo {
  title: string;
  description: string;
  status: string;
}

export interface ITodo extends IPureTodo {
  id: string;
}
