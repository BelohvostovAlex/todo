import React, { useState, useEffect, useCallback } from 'react';

import { TodoPage } from './TodoPage';
import { ITodo, IPureTodo } from '../../models/ITodo';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { availiableOptionsEnum } from '../../models/enums';
import { useHandlers } from '../../hooks/useHandlers';

const todoOptionsBackend: Record<string, string> = {
  [availiableOptionsEnum.todo]: 'todo',
  [availiableOptionsEnum.in_progress]: 'in_progress',
  [availiableOptionsEnum.done]: 'done',
};

export const TodoPageContainer: React.FC = () => {
  const [filteredTodos, setFilteredTodos] = useState([] as ITodo[]);
  const { isVisible, type } = useTypedSelector((state) => state.modalReducer);
  const { todos, filter } = useTypedSelector((state) => state.todosReducer);
  const { fetchTodos, setFilter } = useActions();
  const { addTodo, deleteTodo, editTodo, handleVisibleModal, initialValue } =
    useHandlers();

  useEffect(() => {
    fetchTodos();
  }, []);

  const hasTodo = !!filteredTodos.length;

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
      currentFilter={filter}
      initialValue={initialValue}
    />
  );
};
