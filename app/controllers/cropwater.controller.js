const db = require("../models");
const Cropwater = db.cropwater;

const Op = db.Sequelize.Op;



// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const user_id = req.body.user_id;
    // Validate request
    if (!user_id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    var condition = { userid: user_id }; 
    Cropwater.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


// Create and Save a new Tutorial
exports.create = (req, res) => {
    
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};