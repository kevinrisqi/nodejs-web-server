const http = require('http');

const requestListener = (request, response) => {



    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const { method } = request;

    switch (method) {
        case 'GET':
            response.end('<h1>Hai</h1>');
            break;
        case 'POST':
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk)
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body)
                response.end(`<h1>Hai, ${name}</h1>`);
            });

            break;
        case 'PUT':
            response.end('<h1>Kevin</h1>');
            break;
        case 'DELETE':
            response.end('<h1>Risqi</h1>');
            break;
        default:
            break;
    }
}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})

