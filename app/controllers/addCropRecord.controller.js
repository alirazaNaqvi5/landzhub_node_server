const db=require('../models');
const Op=db.Sequelize.Op;
const Crop_record=db.crop_record;
exports.addCroprecord= (req,res)=>{
    const cropdata = {
        user_id: req.body.user_id,
        land_id: req.body.land_id,
        variety_name: req.body.variety_name,
        sowing_method: req.body.sowing_method,
        crop: req.body.crop,
        srange: req.body.srange,
        erange: req.body.erange,
        season: req.body.season,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        sowing_date: req.body.sowing_date,
        actual_sowing_date: req.body.actual_sowing_date,
        status: req.body.status,
        updated_date: req.body.updated_date
    }
    Crop_record.create(cropdata)
    .then(cropRecord=>{
        res.json({
            "success":true,
            "code":200,
            "message":"CropRecord Added Successfully",
            "data": cropRecord
            });
    })
    
    .catch(err=>{
        res.send("error"+err);
    })


}