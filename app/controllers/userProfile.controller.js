const db = require("../models");
const register_user = db.register_user;
const new_farmer_land = db.new_farmer_land;
const tbl_farmer_crops = db.tbl_farmer_crops;
const Op = db.Sequelize.Op;



// creating controller to upload profile image in using Multer

exports.uploadProfileImage = (req, res) => {
    const file = req.file.filename
    const filename = 'https:/agronomics.pk/uploads/' + file
    register_user.update({
        Image: filename,
    }, {
        where: {
            id: req.body.id
        }
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Promo_ticker."
            });
        });
}

// creating controller to get all data from new_farmer_land and tble_farmer_crop table
exports.getAllData = (req, res) => {
    const data = {};
    new_farmer_land.findAll({
       attributes: ['name'],
         where: {
             user_id: req.query.userID
            }
    })
        .then(tLands => {
            data.totalLands = tLands.length;
            return tbl_farmer_crops.findAll({
                where: {
                    user_id: req.query.userID
                }
            })

        })
        .then(crops => {
            data.totalCrops = crops.length;
            return new_farmer_land.findAll({
                attributes: ['id'],
                where: {
                    user_id: req.query.userID,
                    status: '4'
                }
            })
        })
        .then(land => {
            data.totalLeased = land.length;
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving tble_farmer_crop table, new_farmer_land."
            });
        });
}

    