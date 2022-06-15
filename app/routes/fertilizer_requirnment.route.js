module.exports=app=>{
    const router=require('express').Router();
    const Fertilizer_requirnment=require('../controllers/fertilizer_requirnment.controller');
    router.get('/get',Fertilizer_requirnment.getfertilizer_requirnment);
    app.use("/api/fertilizer_requirnment",router);
    }