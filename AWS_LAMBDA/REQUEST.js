const http = require('http');
const url = "http://registry.npmjs.org/-/package/$/dist-tags";

exports.handler = async({ queryStringParameters }) => {
    const currentUrl = url.replace('$', queryStringParameters.name);
    
    const promise = new Promise(resolve => {
        http.get(currentUrl, res => {
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                const parsedData = JSON.parse(rawData);
                resolve(parsedData);
            })
        })
    })

    return promise;
}
