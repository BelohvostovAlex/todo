export interface ITodo {
  title: string;
  description: string;
}

export interface ITodoFull extends ITodo {
  id: string;
  status: string;
}
