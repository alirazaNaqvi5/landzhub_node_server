const db = require("../models");
const Crop_norms = db.crop_norms;

const Op = db.Sequelize.Op;



// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    
   
    // var condition = { userid: user_id }; 
    Crop_norms.findAll({
      attributes: ['crop_family'],
      distinct: true,
      where: {
          status: {
              [Op.gt]:"0"
          }
      }
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
  };


// Create and Save a new Tutorial
exports.crops = (req, res) => {
    if(!req.body.cropfamily){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    Crop_norms.findAll({
      attributes: ['crop_family', 'crop', 'importance', 'water_logged', 'sowing_seed_depth','base_temp','season','scientific_name','scientific_family','seedrate','crop_urdu' ],
      where: {
        crop_family: {
              [Op.eq]: req.body.cropfamily
          }
      }
    }).then(data => {
      res.send(
        data
        .filter((obj)=>{if(!tempcrop.includes(obj["crop"])){tempcrop.push(obj.crop);   return obj;    }})
        .map(obj=>{
        obj.image = 'https://greenageservices.pk/assets/gallery/'+obj.crop.toLowerCase()+'.png'
        return obj
    }))
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};