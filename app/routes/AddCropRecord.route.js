module.exports=app=>{
    const router=require('express').Router();
    const AddCropRecord=require('../controllers/addCropRecord.controller');
    router.post('/',AddCropRecord.addCroprecord);
    
    app.use("/addCropRecord",router);
    }