import React, { useState, useEffect, useCallback } from 'react';

import { TodoPage } from './TodoPage';
import { ITodo, IPureTodo } from '../../models/ITodo';
import { useFetchData } from '../../hooks/useFetchData';
import WebService from '../../services/WebService';
import { availiableOptionsEnum } from '../../models/enums';

const todoOptionsBackend: Record<string, string> = {
  [availiableOptionsEnum.todo]: 'todo',
  [availiableOptionsEnum.in_progress]: 'in_progress',
  [availiableOptionsEnum.done]: 'done',
};

const availiableOptions = ['todo', 'in_progress', 'done'];
const { REACT_APP_SERVER_URL } = process.env;

const defaultValue = {
  id: '',
  title: '',
  description: '',
  status: '',
};

export const TodoPageContainer: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[]);
  const [filteredTodos, setFilteredTodos] = useState([] as ITodo[]);
  const [currentFilter, setCurrentFilter] = useState('All');
  const [modalType, setModalType] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);
  const [initialValue, setInitialValue] = useState(defaultValue as ITodo);
  const { data } = useFetchData(REACT_APP_SERVER_URL!);

  useEffect(() => {
    setTodos(data);
  }, [data]);

  const hasTodo = !!filteredTodos.length;

  const addTodo = async (todo: IPureTodo) => {
    const data = await WebService.postData(todo);
    setTodos([...todos, data]);
    handleVisibleModal();
  };

  const deleteTodo = async (id: string) => {
    const currentTodo = todos.find((todo) => todo.id === id);
    WebService.deleteData(currentTodo!);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleVisibleModal = (id?: string) => {
    const isEdit = typeof id === 'string';
    let defaultValue = {
      id: '',
      title: '',
      description: '',
      status: '',
    };

    setVisibleModal((prev) => !prev);
    setModalType(isEdit ? 'edit' : 'create');

    if (isEdit) {
      const currTodo = todos.find((todo) => todo.id === id);
      defaultValue = { ...currTodo! };
    }

    setInitialValue(defaultValue);
  };

  const handleTodoProgress = async (id: string, status: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status: status } : todo))
    );
    const currentTodo = todos.find((todo) => todo.id === id);
    WebService.updateData({ ...currentTodo!, status: status });
  };

  const filterTodos = useCallback(
    (title: string) => {
      setCurrentFilter(title);
      if (title === 'All') return setFilteredTodos(todos);

      return setFilteredTodos(
        todos.filter((todo) => todo.status === todoOptionsBackend[title])
      );
    },
    [todos]
  );

  useEffect(() => {
    filterTodos(currentFilter);
  }, [todos, currentFilter, filterTodos]);

  const editTodo = async (todo: IPureTodo) => {
    const { id } = initialValue;
    const currTodo = todos.find((todo) => todo.id === id);
    const editedTodo = {
      ...currTodo!,
      ...todo,
    };
    WebService.updateData(editedTodo!);
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? {
              ...todo,
              title: editedTodo.title,
              description: editedTodo.description,
            }
          : todo;
      })
    );
    setVisibleModal((prev) => !prev);
  };

  const handleSubmit = (data: IPureTodo) =>
    modalType === 'create' ? addTodo(data) : editTodo(data);

  return (
    <TodoPage
      todos={filteredTodos.slice(-5)}
      deleteTodo={deleteTodo}
      visibleModal={visibleModal}
      handleVisibleModal={handleVisibleModal}
      handleSubmit={handleSubmit}
      hasTodo={hasTodo}
      filterTodos={filterTodos}
      availiableOptions={availiableOptions}
      handleTodoProgress={handleTodoProgress}
      currentFilter={currentFilter}
      modalType={modalType}
      initialValue={initialValue}
    />
  );
};
