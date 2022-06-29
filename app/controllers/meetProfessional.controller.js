const db = require("../models");
const Op = db.Sequelize.Op;
const meetProfessional = db.meetProfessional;


exports.addProfessional = (req, res) => {

    if(!req.body.name || !req.body.phoneNumber || !req.body.email || !req.body.specialization || !req.body.designation){
        res.status(400).send({
            message: "Please fill all the fields!"
        });
    }
    

    const data = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        specialization: req.body.specialization,
        designation: req.body.designation

    };
    // Save Tutorial in the database
    meetProfessional.create(data).then((r) => {
        res.send("Data Submitted SuccessFully!");
    }).catch((err) => {
        res.send(err)
    })
}


exports.getPressionals=(req,res)=>{

    meetProfessional.findAll().then((r)=>{
        res.send(r)

    }).catch((err)=>{
        res.send(err)
    })


}

