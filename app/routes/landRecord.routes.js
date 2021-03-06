module.exports = app => {
    const landRecord = require("../controllers/landRecord.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();

    //  getting all data from new_farmer_land table based on user id with pagination
    router.get("/get", landRecord.getData);

    // Add data in new_farmer_land table
    router.post("/add", landRecord.addData);

    // Delete land record based on id
    router.delete("/deleteLand", landRecord.deleteData);

    
    landRecord.Interval()
    
    
    
    // Authentication middleware
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
      
      
      app.use('/landrecord',[authJwt.verifyToken], router);
      
};