module.exports = function (app) {
    const { authJwt } = require("../middleware");
    const notificationJob = require("../controllers/notificationJob.contoller.js");
    var router = require("express").Router();

    // Add new data in notificationJob table
    router.post("/userid", notificationJob.findUserId);

    notificationJob.Interval();



    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.use('/api/notificationjob',[authJwt.verifyToken], router);
};