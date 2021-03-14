const express = require("express");
require("dotenv").config();
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const path =require("path");


const host = "localhost";
const port = 5001 || process.env.port;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware

app.use(express.static(__dirname + "/public"))
 
app.get( "/", (req, res) => {
     res.render("index");
});


app.listen(port, host, () => {
    console.log("I'm listening https//%s:%s", host, port)
}); 