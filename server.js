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


// json() and urlencoded()
// .json() and .urlencoded() are express middleware functions that parse data in outgoing requests
// What is middleware
// function or piece of code that is called(run) between when a server get a request from
// a client and when it sends a response back to the client
// examples
// 1. console.log('sever is listening on port ${port}')
// 2. functions that manipulate incoming or outgoing data (.json() and urlencoded())
// They parse outgoing requests
// they are needed in POST and PUT requests
// they are not needed in GET and DELETE requests
// .json()
// Express.json() expects request data to be sent in JSON format, resembles a simple JS Object
// {"Name": "Lwazi", "LastName": "Surname"}
// JSON stands for JavaScript Object Notation
// .urlencoded()
// Express.urlencoded() expects request data to be sent encoded in the URL, usually in strings or
// array
// .../Name=Pikachu&Type=Banana&Number+In+Stable=12
// you can call them using
// express.json()
// express.urlencoded()
// but if you want them to be used everytime a request is made on the server (which is a typical
// use case), you can also use app.use:
// app.use(express.json())
// app.use(express.urlencoded())
var express = require('express');
var cors = require('cors');
var  app = express();

// CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security
// applied to an API
var corsOptions = {
    origin: "http://localhost:8081"
}
console.log('Is our project running?');

app.use(cors(corsOptions));
// app object is instantiated on creation of the express server
// use is a method to configure the middleware used by the routes

// parse requests of content type application/json
app.use(express.json());

// parse requests of content type - application/x-www-form-urlencoded

app.use(express.urlencoded({extended: true}));

// simple route

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the World Of Node JS'})
});

// app.get('/get-all-books', (req, res) => {
//     res.json({message: 'List of books'})
// });

require("./app/routes/tutorial.routes");

// set port, listen for requests

const PORT = process.env.PORT || 8081;
require("./app/routes/tutorial.routes.js")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:8081`);
});

// Create DataBase NodeJSAPI
// Create MySQL table `tutorials`
// Create Table if not exists `tutorials` (
// id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
// title varchar(255) NOT NULL,
// description varchar(255),
// published BOOLEAN DEFAULT false,
// )

// Configure & connect our application to MySQL database
// require('./app/models/db');




