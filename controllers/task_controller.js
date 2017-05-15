var express = require("express");

var router = express.Router();

// Import the model (tasks.js) to use its database functions.
var task = require("../models/tasks.js");

// Create all our routes and set up logic within those routes where required.
// get all tasks to be done and also completed
router.get("/", function(req, res) {
  task.selectAll(function(data) {
    var hbsObject = {
      tasks: data
    };
    console.log(hbsObject); // this shows you in the console what data results are.
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  task.insertOne([
    "task", "completed"
  ], [
    req.body.name, req.body.completed
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  task.updateOne({
   completed: req.body.completed
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
