module.exports = app => {
    const courses = require("../controllers/course.controller.js");
    var router = require("express").Router();
    // create a new tutorial record into mysql
    router.post("/", courses.create);
    // retrieve all tutorials from the database
    router.get("/", courses.findAll);
    app.use('/api/courses', router);

}