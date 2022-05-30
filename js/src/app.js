import { Header } from './components/index.js';
import { $, getUniqueKey } from './utils/index.js';

class App {
  constructor() {
    this.state = [];

    this.header = new Header({
      $target: $({ selector: '.new-todo' }),
      addTodo: this.addTodo.bind(this),
    });
  }

  addTodo({ todo }) {
    this.state.push({ id: getUniqueKey(), todo });
  }
    
    

  render() {
    this.header.render();
  }
}

export default App;
