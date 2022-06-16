module.exports = app => {
    const mandiRates = require("../controllers/mandiRates.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();


    // Test mandiRates
    router.get("/test", mandiRates.test);

    // Retrieve all mandiRates from the database.
    router.post("/rates", mandiRates.getRatesByCityAndCrop);

    // Retrieve Crops names based on city name from the database.
    router.post("/crops", mandiRates.getCropsByCityName);

    // Retrieve all City Names from the database.
    router.get("/cities", mandiRates.getCityNames);

    // Retrieve all Crop Names from the database.
    router.get("/allcrops", mandiRates.getAllCropNames);




    



    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    
    app.use('/mandiRates',[authJwt.verifyToken], router);
  };