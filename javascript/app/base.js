import { _ } from 'underscore';

let sym = Symbol(10);

let Base = class {

    constructor(){
        console.log(sym);
        this._foobar  = 'foobar';
        this._ = _;
    }

    quux(){
        console.log(`Base::quux _foobar = ${this._foobar}`);
    }

    get foobar(){
        return this._foobar;
    }

    set foobar(str){
        this._foobar = str;
    }

};

export default Base;
