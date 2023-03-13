const express = require('express');
const bodyParser = require('body-parser');
const questionRoutes = require('./src/routes/question.routes');
const cors = require('cors');
// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-formurlencoded
app.use(bodyParser.urlencoded({extended:true}));

//parse requests of content-type - application/json

app.use(bodyParser.json());
app.use(cors())

// define a route 
app.get('/', (req, res) => {
    res.send("Hello World");
});

// using middleware
app.use('/', questionRoutes )
// listening for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);

})
