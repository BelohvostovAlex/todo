import React, { useState, useEffect, useCallback } from 'react';

import { TodoPage } from './TodoPage';
import { ITodo, IPureTodo } from '../../models/ITodo';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { availiableOptionsEnum } from '../../models/enums';

const todoOptionsBackend: Record<string, string> = {
  [availiableOptionsEnum.todo]: 'todo',
  [availiableOptionsEnum.in_progress]: 'in_progress',
  [availiableOptionsEnum.done]: 'done',
};

const availiableOptions = ['todo', 'in_progress', 'done'];

const defaultValue = {
  id: '',
  title: '',
  description: '',
  status: '',
};

export const TodoPageContainer: React.FC = () => {
  const [filteredTodos, setFilteredTodos] = useState([] as ITodo[]);
  const [initialValue, setInitialValue] = useState(defaultValue as ITodo);

  const { isVisible, type } = useTypedSelector((state) => state.modalReducer);
  const { setVisible, setType } = useActions();
  const { todos, filter } = useTypedSelector((state) => state.todosReducer);
  const {
    fetchTodos,
    setFilter,
    addTodoActionCreator,
    deleteTodoActionCreator,
    updateTodoActionCreator,
    updateTodoStatusActionCreator,
  } = useActions();

  useEffect(() => {
    fetchTodos();
  }, []);

  const hasTodo = !!filteredTodos.length;

  const addTodo = async (todo: IPureTodo) => {
    addTodoActionCreator(todo);
    setVisible(false);
  };

  const deleteTodo = async (id: string) => {
    const currentTodo = todos.find((todo) => todo.id === id);

    deleteTodoActionCreator(currentTodo!);
  };

  const handleVisibleModal = (id?: string) => {
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
  };

  const handleTodoProgress = async (id: string, status: string) => {
    const currentTodo = todos.find((todo) => todo.id === id);

    updateTodoStatusActionCreator({ ...currentTodo, status: status });
  };

  const filterTodos = useCallback(
    (title: string) => {
      setFilter(title);
      if (title === 'All') return setFilteredTodos(todos);

      return setFilteredTodos(
        todos.filter((todo) => todo.status === todoOptionsBackend[title])
      );
    },
    [todos]
  );

  useEffect(() => {
    filterTodos(filter);
  }, [todos, filter, filterTodos]);

  const editTodo = async (todo: IPureTodo) => {
    const { id } = initialValue;
    const currTodo = todos.find((todo) => todo.id === id);
    const editedTodo = {
      ...currTodo!,
      ...todo,
    };

    updateTodoActionCreator(editedTodo);

    setVisible(false);
  };

  const handleSubmit = (data: IPureTodo) =>
    type === 'create' ? addTodo(data) : editTodo(data);

  return (
    <TodoPage
      todos={filteredTodos.slice(-5)}
      deleteTodo={deleteTodo}
      visibleModal={isVisible}
      handleVisibleModal={handleVisibleModal}
      handleSubmit={handleSubmit}
      hasTodo={hasTodo}
      filterTodos={filterTodos}
      availiableOptions={availiableOptions}
      handleTodoProgress={handleTodoProgress}
      currentFilter={filter}
      modalType={type}
      initialValue={initialValue}
    />
  );
};
