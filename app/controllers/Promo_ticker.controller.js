const db = require("../models");
const Promo_ticker = db.Promo_ticker;
const Op = db.Sequelize.Op;


// Defining a getAllData function that will be used to get all data from Promo_ticker table
exports.getAllData = (req, res) => {
    Promo_ticker.findAll()
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Promo_ticker."
        });
        });
    }

    // Defining a update function that will be used to update a Promo_ticker record based on id
    exports.update = (req, res) => {
        // validate request
        if (!req.body.text) {
        res.status(400).send({
            message: "text can not be empty!"
        });
        return;
        }
        
        // update Promo_ticker
        Promo_ticker.update(
        {
            ticker : req.body.text
        },
        {
            where: { id: 1 }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Promo_ticker was updated successfully."
            });
            } else {
            res.send({
                message: `Cannot update Promo_ticker with text = ${req.body.text}. Maybe Promo_ticker was not found or req.body is empty!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating Promo_ticker with text = " + req.body.text
            });
        });
    };