export function Header({ $target, addTodo }) {
  const registerEvent = () => {
    $target.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        addTodo({ todo: e.target.value });
        e.target.value = '';
      }
    });
  };

  this.render = () => registerEvent();
}
