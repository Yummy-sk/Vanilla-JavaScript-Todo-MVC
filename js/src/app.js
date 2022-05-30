import { Header } from './components/index.js';
import { $ } from './utils/index.js';

class App {
    constructor() {
        this.state = [];

        const header = new Header({
            $target: $('.header')
        });
    }

    
}

export default App;
