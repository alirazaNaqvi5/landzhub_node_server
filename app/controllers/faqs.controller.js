const db = require("../models");
const Blogs = db.blogs;
const crop_norms = db.crop_norms;
const crop_stages = db.crop_stages;
const Op = db.Sequelize.Op;
const category=db.category;
const faqs =db.faqs;
const Promo = db.Promo;

exports.getCropsFromCropNorms = ( req, res ) =>{
    crop_norms.findAll({
        attributes: [db.Sequelize.fn('DISTINCT', db.Sequelize.col('crop')) ,'crop'],
      
        where:{
            status: {
                [Op.gt]: "0"
            }
        },
        
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
}


exports.getSubStageBasedOnCrop = (req, res) =>{
    crop_stages.findAll({
        attributes: [db.Sequelize.fn('DISTINCT', db.Sequelize.col('sub_stage')) ,'sub_stage'],
      
        where:{
            crop: {[Op.eq]:req.query.crop}
        },
        
    })
    .then(async (data) => {
        var r = await data.map(each=>each.sub_stage)
        res.send(r);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
}

exports.getCategoriesList = (req, res) =>{

    category.findAll({        
        where:{
            crop: {[Op.eq]:req.body.crop}
        },
    })
    .then(async (data) => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
}


exports.getAllQA=(req,res)=>{

    faqs.findAll({        
        where:{
            crop: {[Op.eq]:req.body.crop},
            cat_id:{[Op.eq]:req.body.cat_id}
        },
    })
    .then(async (data) => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
}




exports.getPromo=(req,res)=>{
    Promo.findAll({
        where:{
            status: {
                [Op.gt]: 0
            }
        }

    })
    .then(data => {
        res.send(data);
    }
    )
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Promos."
        });
    }
    );

}