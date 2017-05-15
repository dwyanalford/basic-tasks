// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var task = {
  selectAll: function(cb) {
    orm.selectAll("tasks", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("tasks", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("tasks", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (task_Controller.js).
module.exports = task;
