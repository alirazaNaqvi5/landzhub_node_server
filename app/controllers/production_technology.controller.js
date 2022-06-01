const db = require("../models");
const production_technology = db.production_technology;
const Op = db.Sequelize.Op;


// submit a new Production_Technology record
exports.submit = (req, res) => {
    // validate request
    if (!req.body.name || !req.body.details) {
        res.status(400).send({
        message: "Details and name can not be empty!"
        });
        return;
    }
    
    // create a new Production_Technology
    production_technology.create({
        crop_name: req.body.name,
        details: req.body.details,
        createdAt: new Date()
    })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Production_Technology."
        });
        });
    };

    // Edit Details column of a Production_Technology record based on id
    exports.edit = (req, res) => {
        // validate request
        if (!req.body.id || !req.body.details) {
        res.status(400).send({
            message: "Details and id can not be empty!"
        });
        return;
        }
        
        // update Production_Technology
        production_technology.update(
        {
            details: req.body.details
        },
        {
            where: { id: req.body.id }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Production_Technology was updated successfully."
            });
            } else {
            res.send({
                message: `Cannot update Production_Technology with id=${req.body.id}. Maybe Production_Technology was not found or req.body is empty!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating Production_Technology with id=" + req.body.id
            });
        });
    };

    // Delete a Production_Technology record based on id
    exports.delete = (req, res) => {
        const id = req.body.id;

        production_technology.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Production_Technology was deleted successfully!"
            });
            } else {
            res.send({
                message: `Cannot delete Production_Technology with id=${id}. Maybe Production_Technology was not found!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete Production_Technology with id=" + id
            });
        });
    };

    // Get all data from production technology
    exports.getData = (req, res) => {
        production_technology.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Production_Technology."
            });
        });
    };

    // get all data from production technology based on crop name
    exports.getCropDataBasedOnName = (req, res) => {
        const crop_name = req.query.crop;

        production_technology.findAll({
            where: {
                crop_name: {
                    [Op.like]: `%${crop_name}%`
                }
            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Production_Technology."
            });
        });
    }