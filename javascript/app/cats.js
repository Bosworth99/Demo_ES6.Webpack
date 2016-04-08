//http://catgifs.tumblr.com/api/read/json
import Base from 'base';
import HTTP from 'http';

let Cats = class extends Base {

    constructor(){
        super();
    }

    init(){

        let $http = new HTTP();

        let request = {
            'dataType' : 'jsonp'
        };

        let callback = {
            success : function(data){
               console.log('success %o', JSON.parse(data));
            },
            error : function(data){
               console.log('error : %o', data);
            }
        };

        let payload = {
            'url' : 'http://catgifs.tumblr.com/api/read/json',
            'data' : request
        };

        console.log('%o',$http);

        $http
            .get(payload)
            .then(callback.succss, callback.error);
    }

};

export default Cats;
