module.exports=app=>{
    const router=require('express').Router();
    const Crop_sowing=require('../controllers/crop_sowing.controller');
    router.get('/crop_sowing_calculate',Crop_sowing.getNearestSoilSample);
    app.use("/crop_sowing",router);
    }