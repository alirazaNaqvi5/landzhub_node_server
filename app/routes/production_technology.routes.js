module.exports = app => {
    const production_technology = require("../controllers/production_technology.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();

    // submitting a new Production_Technology record
    router.post("/submit", production_technology.submit);

    // Edit Details column of a Production_Technology record based on id
    router.put("/edit", production_technology.edit);

    // Delete a Production_Technology record based on id
    router.post("/delete", production_technology.delete);

    // Get all data from production technology
    router.get("/getData", production_technology.getData);

    // get all data from production technology based on crop name
    router.get("/getCropData", production_technology.getCropDataBasedOnName);





    
    // Authentication middleware
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
      
      app.use('/production_technology',[authJwt.verifyToken], router);
};