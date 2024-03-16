const express = require('express');
const path = require('path');

const expressApp = express();

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
    res.render("contact", { contactDetail: {contact: 9876543210, email: "bloom@conestogac.on.ca"}, showNav: true })
});
expressApp.get("/menu", (req, res) => {
    // send a boolean to showNav 
    res.render("menu", {showNav: false})
});

let port = 4200;
expressApp.listen(port);
console.log("Listening to http://localhost:"+port);