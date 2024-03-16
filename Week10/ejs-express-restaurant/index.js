const express = require('express');
const {check, validationResult} = require('express-validator')
const path = require('path');

const expressApp = express();
expressApp.use(express.urlencoded({extended:false}));

expressApp.set("views", path.join(__dirname, "views"));
expressApp.use(express.static("public"));
expressApp.set("view engine", "ejs");

expressApp.get("/", (req, res) => {
    // send a boolean to showNav 
    res.render("main", {showNav: true});
});
expressApp.get("/about", (req, res) => {
    // send a boolean to showNav 
    res.render("about", {showNav: true})
});
expressApp.get("/contact", (req, res) => {
    // send a boolean to showNav 
    res.render("contact")
});

expressApp.post("/contact", [
    check("username", "Name should exists").notEmpty(),
    check("email", "email should exist").notEmpty().isEmail()
], (req,res) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.render("contact", {errors: error.array()});
    } else {
        res.render("thanks");
    }
    console.log(req.body)
})

expressApp.get("/menu", (req, res) => {
    // send a boolean to showNav 
    res.render("menu", {showNav: false})
});

let port = 4200;
expressApp.listen(port);
console.log("Listening to http://localhost:"+port);