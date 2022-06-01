import { Header, Main } from './components/index.js';
import { $, getUniqueKey } from './utils/index.js';

class App {
  constructor() {
    this.state = [];

    this.header = new Header({
      $target: $({ selector: '.new-todo' }),
      addTodo: this.addTodo.bind(this),
    });

    this.main = new Main({
      $target: $({ selector: '.main' }),
      state: this.state,
      toggleTodo: this.toggleTodo.bind(this),
      toggleAll: this.toggleAll.bind(this),
      deleteTodo: this.deleteTodo.bind(this),
    });
  }

  addTodo({ todo }) {
    const nextState = [
      ...this.state,
      {
        id: getUniqueKey(),
        todo,
        completed: false,
      },
    ];

    this.setState({ nextState });
  }

  toggleAll({ completed }) {
    const nextState = this.state.map((todo) => ({
      ...todo,
      completed,
    }));

    this.setState({ nextState });
  }

  toggleTodo({ id }) {
    const nextState = this.state.map((todo) => {
      if (todo.id === id) {
        console.log('ds');
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    this.setState({ nextState });
  }

  deleteTodo({ id }) {
    const nextState = this.state.filter((todo) => todo.id !== id);
    this.setState({ nextState });
  }

  setState({ nextState }) {
    this.state = nextState;
    this.main.setState({ nextState });
  }

  render() {
    this.header.render();
    this.main.render();
  }
}

export default App;
