import { _ } from 'underscore';

let Base = class {

    constructor(){

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
