const db = require('../models');
const Op = db.Sequelize.Op;
const Register_user = db.register_user;
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
exports.getUserinfo = (req, res) => {

   
    Register_user.findAll({
        where: {
            phone: {
                [Op.eq]: req.query.phone.toString()
            }
        }
    })
        .then(user => {
            if (user.length > 0) {
                var token = jwt.sign({ user: user }, config.secret);
                res.send({
                    user: user[0],
                    taccessToken: token
                })
            }
            else {

                Register_user.create({
                    phone: req.query.phone.toString(),
                })
                    .then(data => {
                        var token = jwt.sign({ user: data }, config.secret);
                        res.send({
                            user: data,
                            taccessToken: token
                        })
                    })
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