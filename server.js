const http = require('http');
const app = require('./app')

const server = http.createServer(app);


// Setup server port
const port = process.env.PORT || 5000;
// listening for requests
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);

})
