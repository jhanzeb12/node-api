const http = require('http');
const router = require('./router');
const PORT = process.env.PORT || 8080;
const HOSTNAME = '127.0.0.1';

const server = http.createServer(router);

server.listen(PORT, HOSTNAME, () => {
    console.log(`Node server running at http://${HOSTNAME}:${PORT}/`);
});