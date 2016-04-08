//http://catgifs.tumblr.com/api/read/json
import Base from 'base';
import HTTP from 'http';

let Cats = class extends Base {

    constructor(name = 'Cat'){
        super();
    }

    init(){

        let request = {
            'foo' : 'bar'
        };

        let callback = {
            success : function(data){
               console.log(1, 'success', JSON.parse(data));
            },
            error : function(data){
               console.log(2, 'error', JSON.parse(data));
            }
        };

        let payload = {
            'url' : 'http://catgifs.tumblr.com/api/read/json',
            'data' : request
        };

        HTTP.get(payload)
            .then(callback.succss)
            .error(callback.error);
    }

};

export default Cats;
