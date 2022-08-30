const sql = require("./db.js");
// constructor
const Course = function (course) {
    this.title = course.title;
    this.tutorialId = course.tutorialId;
};
Course.create = (newCourse, result) => {
    sql.query("INSERT INTO courses SET ?", newCourse, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created tutorial: ", { id: res.insertId, ...newCourse });
        result(null, { id: res.insertId, ...newCourse });
    });
};
Course.getAll = (title, result) => {
    let query = "SELECT * FROM courses";
    if (title) {
        query += ` WHERE title LIKE '%${title}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("courses: ", res);
        result(null, res);
    });
};