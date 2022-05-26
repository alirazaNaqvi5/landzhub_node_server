const db = require("../models");
const Crop_norms = db.crop_norms;

const Op = db.Sequelize.Op;



// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    
   
    // var condition = { userid: user_id }; 
    Crop_norms.findAll({
      attributes: ['crop_family'],
      distinct: true,
      where: {
          status: {
              [Op.gt]:0
          }
      }
    })
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