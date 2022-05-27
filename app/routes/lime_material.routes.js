module.exports = app => {
    const Lime_material = require("../controllers/lime_material.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();
    // Retrieve all Lime_material
    router.get("/getAll", Lime_material.getAll);

    // Create a new Tutorial
    router.get("/getCrop", Lime_material.getCrop);

    // get soil_type from \Tbl_fertilizer_requirements` table
    router.get("/soil_type", Lime_material.soilTypes);

    // Create a new ph_requirement with the data from the request
    router.get("/addData", Lime_material.addData);

    



    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    
    app.use('/api/lime_material',[authJwt.verifyToken], router);
  };