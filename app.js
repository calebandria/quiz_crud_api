const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const questionRoutes = require('./src/routes/question.routes');
const themeRoutes = require('./src/routes/theme.routes')
// create express app
const app = express();
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
app.use('/',themeRoutes)

module.exports = app;