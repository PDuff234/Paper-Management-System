const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//const { pipeline } = require("stream");


//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//Register Admin
app.post("/register/admin", async(req, res) => {
    try {
        const { fname, lname, username, password } = req.body;
        const newUser = await pool.query(
            "INSERT INTO Admin (Fname, Lname, Username, Password) VALUES ($1, $2, $3, $4)",
            [fname, lname, username, password]
        );
        
        res.json(newUser);
    } catch (err) {
        console.error(err.message);
    }
});

//Register Author
app.post("/register/authors", async(req, res) => {
    try {
        const { fname, midinit, lname, affiliation, department, phonenumber, email, username, password } = req.body;
        const newUser = await pool.query(
            "INSERT INTO Authors (Fname, midinit, Lname, affiliation, department, phonenumber, email, username, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
            [fname, midinit, lname, affiliation, department, phonenumber, email, username, password]
        );
        
        res.json(newUser);
    } catch (err) {
        console.error(err.message);
    }
});

//Register Reviewer
app.post("/register/reviewers", async(req, res) => {
    try {
        const { fname, midinit, lname, affiliation, department, phonenumber, email, username, password } = req.body;
        const newUser = await pool.query(
            "INSERT INTO Reviewers (Fname, midinit, Lname, affiliation, department, phonenumber, email, username, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
            [fname, midinit, lname, affiliation, department, phonenumber, email, username, password]
        );
        
        res.json(newUser);
    } catch (err) {
        console.error(err.message);
    }
});

//Admin Login Verification
app.post("/login/admin", async(req, res) => {
    try {
        const { username, password } = req.body;
        const userInput = [username, password];
        const verifyLogin = await pool.query(
            "SELECT username, adminid FROM admin WHERE username = $1 and password = $2;",
            userInput
        );
        if(verifyLogin.rows[0].username){
            console.log(verifyLogin.rows[0].adminid)
            res.status(200).send(JSON.stringify(verifyLogin.rows[0].adminid));
        } 
        else{
            console.log("Admin didn't log in");
            res.status(400).send("Invalid credentials");
        }
    } catch (err) {
        console.error(err.message);
    }
});

//Author Login Verification
app.post("/login/authors", async(req, res) => {
    try {
        const { username, password } = req.body;
        const userInput = [username, password];
        const verifyLogin = await pool.query(
            "SELECT username, authorid FROM authors WHERE username = $1 and password = $2;",
            userInput
        );
        if(verifyLogin.rows[0].username){
            console.log(verifyLogin.rows[0].authorid)
            res.status(200).send(JSON.stringify(verifyLogin.rows[0].authorid));
        } 
        else{
            console.log("Author didn't log in");
            res.status(400).send("Invalid credentials");
        }
    } catch (err) {
        console.error(err.message);
    }
});

//Reviewer Login Verification
app.post("/login/reviewers", async(req, res) => {
    try {
        const { username, password } = req.body;
        const userInput = [username, password];
        const verifyLogin = await pool.query(
            "SELECT username, reviewerid FROM reviewers WHERE username = $1 and password = $2;",
            userInput
        );
        if(verifyLogin.rows[0].username){
            console.log(verifyLogin.rows[0].reviewerid)
            res.status(200).send(JSON.stringify(verifyLogin.rows[0].reviewerid));
        } 
        else{
            console.log("Reviewer didn't log in");
            res.status(400).send("Invalid credentials");
        }
    } catch (err) {
        console.error(err.message);
    }
});


//Adding a paper to the database
app.post("/papers", async(req, res) => {
    try {
        const { author, title, uri } = req.body; 
        const newPaper = await pool.query(
            "INSERT INTO Papers (author, title, uri) VALUES ($1, $2, $3)", 
            [author, title, uri]
        ); 
        res.json(newPaper); 
    } catch (err) {
        console.error(err.message); 
    }
}); 

//Open Listener on Port 5000
app.listen(5000, () => {
    console.log("Server has started on port 5000");
});