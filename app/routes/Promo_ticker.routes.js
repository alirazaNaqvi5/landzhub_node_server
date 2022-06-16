module.exports = app => {
    const Promo_ticker = require("../controllers/Promo_ticker.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();

    //  getting all data from Promo_ticker table
    router.get("/", Promo_ticker.getAllData);

    // updating promo_ticker table based on id
    router.post("/", Promo_ticker.update);



    
    // Authentication middleware
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
      
      app.use('/Promo_ticker',[authJwt.verifyToken], router);
};