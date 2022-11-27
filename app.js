const express = require("express");
const app = new express();
const cors = require("cors");
const logger = require("morgan");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger("dev"));



// mongodb
require("./middleware/mongodb.js");


// for hosting to herokku
const path = require('path');
app.use(express.static(path.join(__dirname + "/dist/frontend")));
// app.use(express.static("/dist/blog-case_study-2"));



// for api calls
const api = require("./router/api.js");
app.use("/api", api);

// for heroku
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
});

// set port 
// const port = "api";
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`........port is now connected at ${port} ........`);
});
