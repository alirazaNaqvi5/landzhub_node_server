const db = require("../models");
// calling ph_requirement model for ph_requirement table
const Ph_requirement = db.ph_requirement;

// calling crop_norms model for crop_norms table
const Crop_norms = db.crop_norms;

// calling tbl_fertilizer_requirements model for tbl_fertilizer_requirements table
const Tbl_fertilizer_requirements = db.tbl_fertilizer_requirements;


const Op = db.Sequelize.Op;



// Retrieve all ph_requirements from the database.
exports.getAll = (req, res) => {
    
   
    Ph_requirement.findAll()
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


// getiing crops from crop_norms table
exports.getCrop = (req, res) => {

    Crop_norms.findAll({
        attributes: ['crop'],
        distinct: true
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

// getting soil_type from \Tbl_fertilizer_requirements` table
exports.soilTypes = (req, res) => {
    Tbl_fertilizer_requirements.findAll({
        attributes: ['soil_type'],
        distinct: true
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
