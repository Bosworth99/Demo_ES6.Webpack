// A-> $http function is implemented in order to follow the standard Adapter pattern
export default class HTTP {

    constructor(){}

    // Method that performs the ajax request
    ajax(method, url, args){

        // Return the promise
        return new Promise((resolve, reject) => {

            // Instantiates the XMLHttpRequest
            let client = new XMLHttpRequest();
            let uri = url;

            if (args && (method === 'POST' || method === 'PUT')) {

                uri += '?';
                let argcount = 0;

                for (let key in args) {
                    if (args.hasOwnProperty(key)) {

                        if (argcount++) {
                            uri += '&';
                        }

                        uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
                    }
                }
            }

            client.open(method, uri);
            client.send();

            client.onload = () => {
                if (this.status >= 200 && this.status < 300) {
                    // Performs the function "resolve" when this.status is equal to 2xx
                    resolve(this.response);
                } else {
                    // Performs the function "reject" when this.status is different than 2xx
                    reject(this.statusText);
                }
            };

            client.onerror = () => {
                reject(this.statusText);
            };

        });

    }

    get( payload ){
        return this.ajax('GET', payload.url, payload.data);
    }

    post( payload ){
        return this.ajax('POST', payload.url, payload.data);
    }

    put( payload ){
        return this.ajax('PUT', payload.url, payload.data);
    }

    delete( payload ){
        return this.ajax('DELETE', payload.url, payload.data);
    }

}
