const db = require("../models");

const carbon_sequestration = db.carbon_sequestration;
const Tree_Norms = db.Tree_Norms;

const Op = db.Sequelize.Op;

// create and save addRemidation
exports.addRemidation = (req, res) => {
    // Validate request
    if (!req.body.Species , !req.body.Botanical_name , !req.body.Age , !req.body.Wood_Density , !req.body.DBH , !req.body.Condition_ , !req.body.Height , !req.body.Growth_rate , !req.body.Maturity_in_Months , !req.body.Maximum_age_in_years) {
        res.status(400).send({
        message: "One or more fields are empty!"
        });
    }
    
    // Create a Remidation
    const remidation = {
        Species: req.body.Species,
        Botanical_name: req.body.Botanical_name,
        Age: req.body.Age,
        Wood_Density: req.body.Wood_Density,
        DBH: req.body.DBH,
        Condition_: req.body.Condition_,
        Height: req.body.Height,
        Growth_rate: req.body.Growth_rate,
        Maturity_in_Months: req.body.Maturity_in_Months,
        Maximum_age_in_years: req.body.Maximum_age_in_years
    };

    // Save Remidation in the database
    carbon_sequestration.create(remidation)
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
};

// get all carbon_sequestration records

exports.getAllData = (req, res) => {
    carbon_sequestration.findAll({}).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
};

// Add new record in tree_norms table

exports.addTreeNorms = (req, res) => {
    // Validate request
    if (!req.body.Tree_species, !req.body.Botanical_Name, !req.body.Genus, !req.body.English_name, !req.body.Common_Name, !req.body.Family, !req.body.Habitat, !req.body.Tree_class, !req.body.Plant_source, !req.body.Temperature_min, !req.body.Temperature_max, !req.body.Rainfall_min, !req.body.Rainfall_max, !req.body.Soil_type, !req.body.Soil_pH, !req.body.Height_max, !req.body.MAD, !req.body.Altitude, !req.body.PPDistance, !req.body.RRDistance) {
        res.status(400).send({
        message: "One or more fields are empty!"
        });
    }
    Tree_Norms.create({
        Tree_species: req.body.Tree_species,
        Botanical_Name: req.body.Botanical_Name,
        Genus: req.body.Genus,
        English_name: req.body.English_name,
        Common_Name: req.body.Common_Name,
        Family: req.body.Family,
        Habitat: req.body.Habitat,
        Tree_class: req.body.Tree_class,
        Plant_source: req.body.Plant_source,
        Temperature_min: req.body.Temperature_min,
        Temperature_max: req.body.Temperature_max,
        Rainfall_min: req.body.Rainfall_min,
        Rainfall_max: req.body.Rainfall_max,
        Soil_type: req.body.Soil_type,
        Soil_pH: req.body.Soil_pH,
        Height_max: req.body.Height_max,
        MAD: req.body.MAD,
        Altitude: req.body.Altitude,
        PPDistance: req.body.PPDistance,
        RRDistance: req.body.RRDistance
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
};


// get all tree_norms records

exports.getAllTreeNorms = (req, res) => {
    Tree_Norms.findAll({}).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
};
