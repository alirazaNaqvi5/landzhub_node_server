const db=require('../models');
const Op=db.Sequelize.Op;
const Plant_analysis=db.plant_analysis;




exports.addPlantAnalysis= (req,res)=>{
    const file = req.file.filename
    const filename = 'https://api.greenageservices.pk/plant_analysis/' + file
const plantdata={
    description:req.body.description,
    location:req.body.location,
    Image:filename,
    userId : req.body.userId
 
}
Plant_analysis.create(plantdata)
    .then(data => {
        res.send(data);
     
    }
    )
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while adding analysis."
        });
    });

}


exports.getPlantAnalysis= (req,res)=>{
    Plant_analysis.findAll({
        where:{
            // sequelize and Op are used to query the database
            [Op.and]:[
                {userId:req.query.userId},
                {adminResponse: {
                    [Op.ne]: null
                }}
            ]
        }
    })
    .then(data => {
        res.send(data);
     
    }
    )
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while adding analysis."
        });
    });

}
