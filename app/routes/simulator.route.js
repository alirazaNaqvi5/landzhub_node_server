module.exports=app=>{
    const router=require('express').Router();
    const Simulator=require('../controllers/simulator.controller');
    router.get('/test',Simulator.getCrop_record);
    router.put('/setSowingDate',Simulator.setSowingDate);

    app.use("/simulator",router);
    }