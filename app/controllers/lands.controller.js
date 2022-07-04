const db = require('../models');
const Op = db.Sequelize.Op;



exports.mylands = (req, res) => {
    db.lands.findAll({
        include: [{
            model: db.user,
            attributes: ['phone', 'email']
        }],
        where: {
         
            user_id: { [Op.eq] : req.query.user_id}
         
        
        }
    }).then(lands => {
        res.send(lands);
    }).catch(err => {
        res.send(err);
    })
}


exports.forsell = (req, res) => {
    db.lands.findAll({
        // include user table
        include: [{
            model: db.user,
            attributes: ['phone', 'email']
        }],
        where: {
            forsale: {
                    [Op.eq]: true
                }
            }
        }
    ).then(lands => {
        res.send(lands);
    }).catch(err => {
        res.send(err);
    })
}



exports.addland = (req, res) => {
    console.log("data=========================================================>>>>>",req.body);
    // if( req.body.name && req.body.price && req.body.user_id && req.body.description && req.body.geometry && req.body.area && req.body.address ){
        db.lands.create({
        name: req.body.name,
        price: req.body.price,
        user_id: req.body.user_id,
        description: req.body.description,
        image: req.body.image,
        geometry: req.body.geometry,
        area: req.body.area,
        address: req.body.address,

    }).then(land => {
        res.send(land);
    }).catch(err => {
        res.send(err);
    }
    )
// }
//     else{
//         res.send("error");
//     }

}


exports.listForSale = (req, res) => {
    db.lands.update({
        forsale: true
    }, {
        where: {
            id: req.body.land_id
        }
    }).then(land => {
        res.send(land);
    }).catch(err => {
        res.send(err);
    }
    )
}