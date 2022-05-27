module.exports = app => {
    const geoCode = require("../controllers/geoCoder/geoCode.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();


    router.get("/forward", geoCode.geoCodeForward);


    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    
    app.use('/api/geocode',[authJwt.verifyToken], router);
  };