module.exports = app => {
    const meetProfessional = require("../controllers/meetProfessional.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();


    // Test mandiRates
    router.post("/register",meetProfessional.addProfessional);
    router.get("/getAll",meetProfessional.getPressionals);



    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    
    app.use('/meetProf',[authJwt.verifyToken], router);
  };