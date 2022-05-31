import { useState } from 'react';
import { useActions } from './useActions';
import { useTypedSelector } from './useTypedSelector';

import { IPureTodo } from '../models/ITodo';
import { ITodo } from '../models/ITodo';

const defaultValue = {
  id: '',
  title: '',
  description: '',
  status: '',
};

export const useHandlers = () => {
  const {
    addTodoActionCreator,
    deleteTodoActionCreator,
    updateTodoStatusActionCreator,
    updateTodoActionCreator,
    setVisible,
    setType,
  } = useActions();
  const { todos } = useTypedSelector((state) => state.todosReducer);
  const [initialValue, setInitialValue] = useState(defaultValue as ITodo);

  return {
    addTodo: (todo: IPureTodo) => {
      addTodoActionCreator(todo);
      setVisible(false);
    },

    deleteTodo: (id: string) => {
      const currentTodo = todos.find((todo) => todo.id === id);
      deleteTodoActionCreator(currentTodo!);
    },

    handleTodoProgress: (id: string, status: string) => {
      const currentTodo = todos.find((todo) => todo.id === id);
      updateTodoStatusActionCreator({ ...currentTodo!, status: status });
    },

    editTodo: (todo: IPureTodo) => {
      const { id } = initialValue;
      const currTodo = todos.find((todo) => todo.id === id);
      const editedTodo = {
        ...currTodo!,
        ...todo,
      };
      updateTodoActionCreator(editedTodo);
      setVisible(false);
    },

    handleVisibleModal: (id?: string) => {
      const isEdit = typeof id === 'string';
      let defaultValue = {
        id: '',
        title: '',
        description: '',
        status: '',
      };
      setVisible(true);
      setType(isEdit ? 'edit' : 'create');
      if (isEdit) {
        const currTodo = todos.find((todo) => todo.id === id);
        defaultValue = { ...currTodo! };
      }
      setInitialValue(defaultValue);
    },

    initialValue,
  };
};
