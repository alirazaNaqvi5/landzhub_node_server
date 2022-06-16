module.exports = function (app) {
    const { authJwt } = require("../middleware");
    const cropwater = require("../controllers/cropwater.controller.js");
    var router = require("express").Router();

    // Add new data in cropwater table
    router.post("/add", cropwater.create);



    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
  
    app.use("/cropwater",[authJwt.verifyToken], router);
};