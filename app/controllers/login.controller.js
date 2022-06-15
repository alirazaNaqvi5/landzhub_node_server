const db = require('../models');
const Op = db.Sequelize.Op;
const Register_user = db.register_user;
exports.getUserinfo = (req, res) => {

    const data={}
    Register_user.findAll({
        where: {
            phone: {
                [Op.eq]: req.query.phone.toString()
            }
        }
    })
        .then(user => {
            if (user.length > 0) {
                res.send(user)
            }
            else {

                Register_user.create({
                    phone: req.query.phone.toString(),
                })
                    .then(data => res.send(data))
                    .catch(err => res.send(err))
            }



        })




        .catch(err => {
            res.send("error" + err);
        })


}

exports.postUsername = (req, res) => {


    Register_user.update({

        fullname: req.query.name,
    },{
        where: {
            id: req.query.id
            
        },
    })
    .then(data => res.send(data))
    .catch(err => res.send(err))

}