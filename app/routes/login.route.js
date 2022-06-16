module.exports=app=>{
    const router=require('express').Router();
    const Login=require('../controllers/login.controller.js');
    const { authJwt } = require("../middleware")
    router.get('/check',Login.getUserinfo);

    router.get('/postName', [authJwt.verifyToken] , Login.postUsername);

    
app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

    app.use("/login",router);
   
    }