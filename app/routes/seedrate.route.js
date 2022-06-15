module.exports=app=>{
    const router=require('express').Router();
    const SeedRate=require('../controllers/seedRate.controller.js');
    router.get("/crop",SeedRate.crop_details)
    router.get("/variety_details",SeedRate.variety_details)
    router.get("/varieties",SeedRate.getVarities)
    router.get("/calculate",SeedRate.getcalculate)
    app.use("/api/seedrate",router);

    }