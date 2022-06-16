module.exports=app=>{
    const router=require('express').Router();
    const Login=require('../controllers/login.controller.js');
    router.get('/check',Login.getUserinfo);
    router.get('/postName',Login.postUsername);
    app.use("/login",router);
   
    }