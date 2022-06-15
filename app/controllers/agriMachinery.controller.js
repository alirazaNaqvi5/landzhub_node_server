const db=require('../models');
const AgriMachinery=db.agrimachinery;
const Op=db.Sequelize.Op;


exports.addAgriMachinery= (req,res)=>{
    const file = req.file.filename
    const filename = 'https://api.greenageservices.pk/agriMachineryPictures/' + file
    const agriData = {
        name: req.body.name,
        address: req.body.address,
        Image: filename,
        Age: req.body.Age,
        Designation: req.body.Designation
    }
    AgriMachinery.create(agriData)
        .then(record => {
            res.json({
                "success": true,
                "code": 200,
                "message": "Add AgriMachinery record Successfully",
                "data": record
            });
        })
        .catch(err => {
            res.send("error" + err);
        })


}


exports.getAgriMachinery= (req,res)=>{
    AgriMachinery.findAll()
    .then(record=>{
        res.json({
            "success":true,
            "code":200,
            "message":"Get AgriMachinery record Successfully",
            "data": record
            });
    })
    .catch(err=>{
        res.send("error"+err);
    })


}


exports.updateagriMachinery= (req,res)=>{
    AgriMachinery.destroy(
        {
            where:{
                Age:req.body.age
            }
        }
    )
    .then(record=>{
        res.json({
            "success":true,
            "code":200,
            "message":"Delete AgriMachinery record Successfully",
            "data": record
            });
    })
    .catch(err=>{
        res.send("error"+err);
    })


}

