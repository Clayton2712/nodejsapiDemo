module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    // create a new tutorial record into mysql
    // router.post("/", tutorials.create);
    // retrieve all tutorials from the database
    router.get("/", tutorials.findAll);
    app.use('/api/tutorials', router);
};