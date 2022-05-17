//Define Routes
//Create a Controller
// Create objects
// retrieve objects
// retrieve a single object
// update an object
// delete an object
// delete all objects
// test the API
//  Methods    Urls                Actions
//  GET        api/tutorials       get All tutorials
//  GET        api/tutorials/:id   get Tutorial by id
//  POST       api/tutorials       add new tutorial
//  PUT        api/tutorials/:id   update Tutorial by id
//  DELETE     api/tutorials/:id   remove Tutorial by id
//  DELETE     api/tutorials       remove all Tutorials

//  Test the API using Postman

// File names
// app/config/db.config.js
// app/controllers/tutorial.controller.js
// app/models/db.js
// app/models/tutorial.model.js
// app/routes/tutorial.routes.js
// 1. use the npm to install mysql
// 2. use the npm to install cors
//
var express = require('express');
var cors = require('cors');
var  app = express();

// CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security
// applied to an API
var corsOptions = {
    origin: "http://localhost:8081"
}
console.log('Is our project running?');


