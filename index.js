const express = require("express");
require("dotenv").config();
const logger = require("morgan");


const host = "localhost";
const port = 5001 || process.env.port;
const app = express();

// Middleware

app.use((req, res, next) => { // Authentication
    console.log("Auth");
    res.isAuth = true;
    next();
});

app.use((req, res, next) => {
    console.log("Controller // db");
    if(res.isAuth) {
        console.log("Private data")
    } else {
        console.log("not auth")
    }
    next();
});

app.use((req, res) => {
    console.log("middleware 3");
    if(true) {
        res.send("send");
    };
});


app.listen(port, host, () => {
    console.log("I'm listening https//%s:%s", host, port)
}); 