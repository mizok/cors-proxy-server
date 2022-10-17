const cors_proxy = require('cors-anywhere');
// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || 'https://cors-proxy-server.onrender.com';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8080;


cors_proxy.createServer({
    originWhitelist: ['http://localhost:8080', 'http://localhost:5500', 'https://mizok.github.io'], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});