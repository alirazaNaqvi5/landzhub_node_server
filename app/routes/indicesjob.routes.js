module.exports = function (app) {
    const { authJwt } = require("../middleware");
    const indicesJob = require("../controllers/indicesJob.controller.js");
    var router = require("express").Router();

    // Add new data in notificationJob table
    router.get("/add", indicesJob.getIndicesByCropID);

    indicesJob.Interval();



    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.use('/indicesjob',[authJwt.verifyToken], router);
};