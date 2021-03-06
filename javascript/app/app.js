import { config } from 'config';
import Person from 'person';
import Cats from 'cats';

export default class App {

    constructor(){
        console.log(`App::constructor ${config.name} ${config.version}`);
    }

    init(){
        console.log('App::init %o', this);

        this.start();
    }

    start(){

        this.person = new Person('Bob');
        this.person.hello();
        this.person.foobar = 'barfoo';
        this.person.quux();

        this.cats = new Cats('Cats');
        this.cats.init();

    }
}
