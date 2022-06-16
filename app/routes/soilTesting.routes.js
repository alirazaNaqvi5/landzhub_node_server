module.exports = app => {
    const soilTest = require("../controllers/soilTesting.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();

    // Submit soil sample to the database
    router.post("/submit_sample", soilTest.submit_sample);

    // Get soil sample test record from the database based on user id
    router.get("/test-record", soilTest.get_all_soil_sample_by_userId);

    // Get a;; soil sample test record from the database
    router.get("/records", soilTest.get_all_soil_sample);

    //  Generate soil sample report
    router.post("/generateReport", soilTest.generate_report);

    // Get soil reports by user id from Soil Report table
    router.get("/getReport", soilTest.get_soil_reports_by_userId);


    // Authentication middleware
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    
    app.use('/soilTest',[authJwt.verifyToken], router);
  };