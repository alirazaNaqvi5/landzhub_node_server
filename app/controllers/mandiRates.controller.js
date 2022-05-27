const db = require("../models");
const Op = db.Sequelize.Op;
const Tbl_rates = db.tbl_rates;

// Test Api to test Mandi Rates API
exports.test = (req, res) => {
    res.send('test');
};




// Getting mandi rates by city and crop names from tbl_rates table
exports.getRatesByCityAndCrop = (req, res) => {
    if (req.body.city == null || req.body.crop == null) {
        res.status(400).send({
            message: "city and crop can not be empty"
        });
    }
    Tbl_rates.findAll({
        distict: true,
        where:{
            city:req.body.city,
            crop:req.body.crop,
            fqp: {
                [Op.gt]: "0"
            }
        },
        order: [
            ['date', 'ASC']
        ],
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



// Getting crops names based on city name from tbl_rates table
exports.getCropsByCityName = (req, res) => {
    if (req.body.city == null) {
        res.status(400).send({
            message: "city can not be empty"
        });
    }
    Tbl_rates.findAll({
        distict: true,
        where:{
            city:req.body.city,
            fqp: {
                [Op.gt]: "0"
            }
        },
        attributes: ['crop']
        
    })
    .then(data => {
        var r = data.map(each => each.crop)
        res.send(r);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
};


// Getting all City Names from tbl_rates table
exports.getCityNames = (req, res) => {
    Tbl_rates.findAll({
        attributes: [db.Sequelize.fn('DISTINCT', db.Sequelize.col('city')) ,'city'],
      
        where:{
            fqp: {
                [Op.gt]: "0"
            }
        },
        
    })
    .then(data => {
        var r = data.map(each => each.city)
        res.send(r);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
}


// Getting all Crop Names from tbl_rates table
exports.getAllCropNames = (req, res) => {
    Tbl_rates.findAll({
        attributes: [db.Sequelize.fn('DISTINCT', db.Sequelize.col('crop')) ,'crop'],
        where:{
            fqp: {
                [Op.gt]: "0"
            }
        },
        
    })
    .then(data => {
        var r = data.map(each => each.crop)
        res.send(r);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
}