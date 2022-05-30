const db = require("../models");

// calling soil_testing model for soil_testing table
const soil_testing = db.soil_testing;

// Calling soil_report model for soil_report table
const soil_report = db.soil_report;


const Op = db.Sequelize.Op;


exports.submit_sample = (req, res) => {
    soil_testing.create({
        user_id: req.body.userId,
        location: req.body.location,
        status: req.body.status,
        date: new Date(),
        test_type: '0',
        report: null
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
}


// Controller for getting all soil sample records based on user id
exports.get_all_soil_sample_by_userId = (req, res) => {
    if (!req.query.userId) {
        res.status(400).send({
            message: "User id can not be empty!"
        });
    }
    soil_testing.findAll({
        where: {
            user_id: req.query.userId
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
}


// Controller for getting all soil sample records
exports.get_all_soil_sample = (req, res) => {
    soil_testing.findAll({}).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
}

//  Generate soil sample report
exports.generate_report = (req, res) => {
    // if (!req.body.userId || !req.body.test_id || !req.body.report || !req.body.type) {
    //     res.status(400).send({
    //         message: "User id, test id, report and type can not be empty!"
    //     });
    //     return;
    // }
    soil_report.create({
        user_id: req.body.userID,
        testing_id: req.body.test_id,
        report: req.body.report,
        test_type: req.body.type,
        date: new Date()
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while generating test report."
        });
    });
}

// Controller for getting soil reports by user id
exports.get_soil_reports_by_userId = (req, res) => {
    if (!req.query.userID) {
        res.status(400).send({
            message: "User id can not be empty!"
        });
        return;
    }
    soil_report.findAll({
        where: {
            user_id: req.query.userID
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
}