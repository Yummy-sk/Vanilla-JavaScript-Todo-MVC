import { $ } from '../../utils/index.js';

export function Main({ $target, state, toggleTodo, toggleAll, deleteTodo }) {
  const $toggleAll = $({ selector: '.toggle-all' });
  const $todoList = $({ selector: '.todo-list' });

  const registerEvent = () => {
    $toggleAll.addEventListener('change', ({ target }) => {
      toggleAll({ completed: target.checked });
    });

    $todoList.addEventListener('click', ({ target }) => {
      const node = target.closest('li');
      const id = Number(node.dataset.id);
      const targetName = target.className;

      if (targetName === 'toggle') {
        toggleTodo({ id });
        return;
      }

      if (targetName === 'destroy') {
        deleteTodo({ id });
        return;
      }
    });
  };

  const generageHTML = ({ state }) => {
    console.log(state);
    return state.reduce((acc, todo) => {
      return (
        acc +
        `
        <li data-id="${todo.id}" class="${todo.completed ? 'completed' : ''}">
          <div class="view">
            <input class="toggle" type="checkbox" ${
              todo.completed ? 'checked' : ''
            }>
            <label class="todo">${todo.todo}</label>
            <button class="destroy"></button>
          </div>
        </li>
      `
      );
    }, '');
  };

  this.setState = ({ nextState }) => {
    $todoList.innerHTML = generageHTML({ state: nextState });
  };

  this.render = () => {
    $todoList.innerHTML = generageHTML({ state });
    registerEvent();
  };
}
