const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'thisisourgod',
    database: 'quiz'
});

dbConn.connect((err) =>{
    /* if(err) {
        console.error('erroc connecting: ' + err.stack);
        return;
    }
    console.log('connected as id' + dbConn.threadId); */
    if (err) throw err;
    console.log("Database Connected!");
})

module.exports = dbConn;
