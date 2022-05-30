module.exports = app => {
    const pollution_Remidation = require("../controllers/pollution_Remidation.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();



    // Add Remidation to the database
    router.post("/AddRemidation", pollution_Remidation.addRemidation);

    //for get all data from "carbon_sequestration" table    
    router.get("/getAlldata", pollution_Remidation.getAllData);

    // To Add new record in Tree_Norms table
    router.post("/AddTreeNorms", pollution_Remidation.addTreeNorms);

    //for get all data from "Tree_Norms" table
    router.get("/getAllTreeNorms", pollution_Remidation.getAllTreeNorms);



    
    // Authentication middleware
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
      
      app.use('/api/pollution_Remidation',[authJwt.verifyToken], router);
};