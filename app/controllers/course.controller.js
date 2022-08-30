// Create and Save a new Course
const Course = require("../models/course.model");
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Course
    const course = new Course({
        title: req.body.title,
        tutorialId: req.body.tutorialId,
    });
    // Save Course in the database
    Course.create = (course, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Course."
            });
        else res.send(data);
    });
};
// Retrieve all Courses from the database (with condition).
exports.findAll = (req, res) => {
    console.log('hey')
    const title = req.query.title;
    Course.getAll(title, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
};