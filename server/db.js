const Pool = require('pg').Pool; 

const pool = new Pool({
    user: "postgres", 
    password: "postgres", 
    host: "localhost", 
    port: "5430", 
    database: "pdms"
});

/*
//Testing code to see if we can get a response from server
//Syntax to run: node db.js in server folder
pool.connect(); 

pool.query('Select * from Orders', (err, res) => {
    if (!err) {
        console.log(res.rows); 
    } else {
        console.log(err.message); 
    }
    pool.end; 
})
*/

module.exports = pool; 