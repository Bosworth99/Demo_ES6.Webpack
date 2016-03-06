import { config } from 'config';

export default (function(){
    'use strict';

    class App {

        constructor(){
            console.log('App::constructor %s %s', config.name, config.version );
        }

        init(){
            console.log('App::init %o', this);

            _method();
            _method('holy moly');
        }
    }

    let _private = 'foobar';
    let _method = (str) => {

        console.log('_private = ', str || _private );

    };

    return App;

})();
