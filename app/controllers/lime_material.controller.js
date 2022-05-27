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


exports.addData = (req, res) => {
    // validating the req.body.input data
    if (!req.body.Input) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // creating a new ph_requirement
    const ph_requirement = {
        crop: req.body.Input.crop,
        soil_type: req.body.Input.soil_type,
        lime_requirement: req.body.Input.lime_requirement,
        target_ph: req.body.Input.target_ph,
    };
    // saving the ph_requirement in the database
    Ph_requirement.create(ph_requirement)
        .then(data => {
            res.send(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};