const db=require('../models');
const Simulator=db.crop_record;
const Op=db.Sequelize.Op;
exports.getCrop_record= (req,res)=>{
    Simulator.findAll()
    .then(record=>{
        res.json({
            "success":true,
            "code":200,
            "message":"Get Crop_record Successfully",
            "data": record
            });
    })
    .catch(err=>{
        res.send("error"+err);
    })


}


exports.setSowingDate= (req,res)=>{
    // res.send("setSowingDate");
    Simulator.update(
        {
            actual_sowing_date: req.body.actual_sowing_date
        },
        {
            where: {
                land_id:{
                    [Op.eq]:req.body.land_id
                }
            }
        }

      )

      .then((sowing) => {
        res.json({
            "success":true,
            "code":200,
            "message":"Actual Sowing Date Updated Successfully",
            "data": sowing
            });
    })

    .catch(err => {
        res.send("error" + err);
    })

}