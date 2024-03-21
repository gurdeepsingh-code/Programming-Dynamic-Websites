// imports
const express = require('express');
const path = require('path');
const {check, validationResult} = require('express-validator');
const mongoose = require('mongoose');
const expressApp = express();

// connect to mongodb instance
mongoose.connect("mongodb://localhost:27017/bloom", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// mongoDB Table
const contactDetail = mongoose.model("contact", {
    column1: String,
    column2: String,
    column3: String,
    column4: Number
});

// mongoDB model for login
// handle /login get routing
// handle /loginForm post routing
// save the login credentials of login

expressApp.use(express.urlencoded({extended:false}));

expressApp.set("views", path.join(__dirname, "views"));
expressApp.use(express.static("public"));
expressApp.set("view engine", "ejs");

// routings
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
    res.render("contact", { contactDetail: {contact: 9876543210, email: "bloom@conestogac.on.ca"}, showNav: true })
});

expressApp.post("/contactForm", [
    check("username", "Username is required").notEmpty(),
    check("email", "Email is required and should be in the email format").isEmail()
], (req, res) => {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        console.log(req.body);

        let mongooseDBObj = new contactDetail({
            column1: req.body.username,
            column2: req.body.email,
            column3: req.body.message,
            column4: req.body.age
        });

        mongooseDBObj.save().then( () => {
            console.log("Contact details are saved");
        });
        res.render("thanks");
    } else {
        res.render("contact", {errors: errors.array()});
    }
});

expressApp.get("/menu", (req, res) => {
    // send a boolean to showNav 
    res.render("menu", {showNav: false})
});

let port = 4200;
expressApp.listen(port);
console.log("Listening to http://localhost:"+port);