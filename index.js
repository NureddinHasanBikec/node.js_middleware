const express = require("express");
require("dotenv").config()

const host = "localhost";
const port = 5001 || process.env.port;
const app = express();


app.listen(port, host, () => {
    console.log("I'm listening https//%s:%s", host, port)
}); 