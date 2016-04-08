import Base from 'base';

let Person = class extends Base{

    constructor(name = 'default'){
        super();
        this._name = name;
    }

    hello(){
        console.log(`Hello, ${this._name}`);
        this.quux();
    }

    get name(){
        return this._name;
    }

    set name( name ){
        this._name = name;
    }

};

export default Person;
