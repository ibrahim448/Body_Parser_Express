const express = require("express");
const app = express();
require("dotenv").config()
const bodyParser = require("body-parser");
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
});

app.get("/home",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
});


app.get("/contact",(req,res)=>{
    res.sendFile(__dirname + "/public/contact.html")
});

app.post("/contact",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    res.send(`My Email Address: ${email} <br> <br> My Password: ${password}`)
});



module.exports = app;