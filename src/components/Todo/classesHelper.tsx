import classNames from 'classnames';

export const createTodoSelectClasses = (
  conditionValue: string,
  ...addClass: string[]
) => {
  return classNames('todo-select', ...addClass, {
    'todo-select--blue': conditionValue === 'todo',
    'todo-select--green': conditionValue === 'in_progress',
    'todo-select--orange': conditionValue === 'done',
  });
};

//бред или норм? просто мне нужно классы повторить тогда еще и в SingleTodoPage
