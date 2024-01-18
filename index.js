const http = require('http');


const server = http.createServer((req, res) => {
        res.end('Name: Opara, Precious Chibuzor');
});

//To run the server created
server.listen(8900, '127.0.0.1', () => {
    console.log('The server is cooking!')
})