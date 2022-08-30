module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    // create a new tutorial record into mysql
    router.post("/", tutorials.create);
    // retrieve all tutorials from the database
    router.get("/", tutorials.findAll);

    router.get("/published", tutorials.findAllPublished);


    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorials.update);


    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    app.use('/api/tutorials', router);
};