const express = require("express");
require("dotenv").config();
const logger = require("morgan");
const cookieParser = require("cookie-parser");


const host = "localhost";
const port = 5001 || process.env.port;
const app = express();

// Middleware

app.use(cookieParser());

app.use((req, res, next) => { 
    console.log("Cookies: ", req.cookies);
    next();
});

app.use((req, res) => {
    console.log("middleware 2");
    if(true) {
        res.send("send");
    };
});


app.listen(port, host, () => {
    console.log("I'm listening https//%s:%s", host, port)
}); 