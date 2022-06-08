const db = require("../models");
const new_farmer_land = db.new_farmer_land;
const Op = db.Sequelize.Op;


// if (req.query.uid == undefined || req.query.page == undefined) { throw res.send('INVALID REQUEST') }
//             let startIndex = ((req.query.page * 5) - 5);

//             greenagedbconn.query('SELECT * FROM `new_farmer_land` WHERE status>0 and `user_id`=' + req.query.uid + ' ORDER BY `id` DESC LIMIT ' + startIndex + ',5'

exports.getData = (req, res) => {
    if (req.query.uid == undefined || req.query.page == undefined) { throw res.send('INVALID REQUEST') }
    let startIndex = ((req.query.page * 5) - 5);
    new_farmer_land.findAll({
        where: {
            status: {
                [Op.gt]: 0
            },
            user_id: req.query.uid
        },
        limit: 5,
        offset: startIndex,
        order: [
            ['id', 'DESC']
        ]
    })
        .then(landresult => {
            const asyncFunc = async () => {
                var landresultnew = landresult.map(async (landrecord) => {


                    const que = await getallcroprecord(landrecord.id);
                    landrecord.crop = que
                    //////////////////////////////CROP RECORD ID FOR CROP WATER//////////////////
                    /////////////////////////////////////////////////////////////////////////////

                    const cropwater = await getcropwater(landrecord.id)
                    const cropwaterrecord = await getcropwaterrecord(landrecord.id)

                    /////////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////////


                    landrecord.cropwater = cropwater
                    landrecord.cropwaterrecord = cropwaterrecord


                    return landrecord

                })


                // res.send(publen + (key.encrypt(JSON.stringify(await Promise.all(landresultnew)), 'base64')) + pri)
                res.send(await Promise.all(landresultnew))


            }

            asyncFunc()
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        })
}

// 'INSERT INTO `new_farmer_land`(`id`, `size`, `address`, `province`, `district`, `tehsil`, `location`, `geometry`, `status`, `name`, `user_id`, `suitablecrops`, `suitabilityupdated`) ' +
// "VALUES (null,'" + req.body.size +
// "','" + req.body.address +
// "','" + req.body.province +
// "','" + req.body.district +
// "','" + req.body.tehsil +
// "','" + req.body.location +
// "','" + req.body.geometry +
// "',1,'" + req.body.name + "','" + req.body.user_id + "',null,null)"


const assignsuitable = async (id, loc, x) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: "https://greenageservices.pk/Api_greenage/suitability_crops?latitude=" + loc[1] + "&longitude=" + loc[0] + "&miles=5000",
            headers: {
                "Greenage": '5e306c70c4cc37211fae9044c927e1af3ebb3404',
            }
        }).then(function (response) {
            var data = JSON.stringify(response.data.list)

            // greenagedbconn.query('UPDATE `new_farmer_land` SET `suitablecrops`=\'' + data + '\',suitabilityupdated=' + Date.now() + ' WHERE status>0 and id=' + id, (error, landresult) => {
            //     if (x != 1) runSuitablity()
            //     console.log('Suitability of land recrod ' + id + ' updated')
            //     resolve('Suitability of land recrod ' + id + ' updated')

            // })
            new_farmer_land.update({
                suitablecrops: data,
                suitabilityupdated: Date.now(),
                where: {
                    id: id,
                    status: {
                        [Op.gt]: 0
                    }
                }
            }).then((landresult) => {
                if (x != 1) runSuitablity()
                console.log('Suitability of land recrod ' + id + ' updated')
                resolve('Suitability of land recrod ' + id + ' updated')
            })

        })
            .catch(err => {
                reject(err)
            })
    })
}

const runSuitablity = () => {
    // var sql = 'SELECT * FROM `new_farmer_land` WHERE status>0 AND ( suitabilityupdated IS NULL OR suitabilityupdated < ' + (Date.now() - 3600000).toString() + ' ) ORDER BY `new_farmer_land`.`id` DESC limit 1'
    // console.log(sql)

    // greenagedbconn.query(sql, (error, landresult) => {

    //     if (!error) {

    //         if (landresult[0] !== undefined) {

    //             var loc = landresult[0].location.replace('[', '').replace(']', '').split(',')

    //             assignsuitable(landresult[0].id, loc)

    //         }

    //     } else {
    //         console.log('runSuitablityEroor->>>>>', error)
    //     }

    // })
    new_farmer_land.findAll({
        where: {
            status: {
                [Op.gt]: 0
            },
            suitabilityupdated: {
                [Op.lt]: Date.now() - 3600000 || null
            }
        },
        limit: 1,
        order: [
            ['id', 'DESC']
        ]
    }).then(landresult => {
        if (landresult[0] !== undefined) {
            var loc = landresult[0].location.replace('[', '').replace(']', '').split(',')
            assignsuitable(landresult[0].id, loc, 1)
        }
        else {
            console.log('No suitable land found')
        }
    })

}

















exports.addData = (req, res) => {
    new_farmer_land.findAll({
        where: {
            status: 1,
            user_id: req.body.user_id,
        }
    }).then((gresult) => {
        if (gresult.length > 5) {
            res.send({
                status: 400,
                error: 'Limit Reached'
            })
        } else {
            new_farmer_land.create({
                size: req.body.size,
                address: req.body.address,
                province: req.body.province,
                district: req.body.district,
                tehsil: req.body.tehsil,
                location: req.body.location,
                geometry: req.body.geometry,
                status: 1,
                name: req.body.name,
                user_id: req.body.user_id,
                suitablecrops: null,
                suitabilityupdated: null
            })
                .then(result => {
                    assignsuitable(result.id, JSON.parse(result.location), 1)
                        .then(() => {

                            // greenagedbconn.query("SELECT * FROM `new_farmer_land` WHERE id=" + result.insertId, (err2, result2) => {

                            //     if (!err2) {
                            //         res.status = 200
                            //         res.send(result2)
                            //     } else {
                            //         console.log('Error in Inner Add Land--->>>', err2)
                            //     }

                            // })
                            new_farmer_land.findAll({
                                where: {
                                    id: result.id
                                }
                            }).then((result2) => {
                                if (!err2) {
                                    res.status = 200
                                    res.send(result2)
                                } else {
                                    console.log('Error in Inner Add Land--->>>', err2)
                                }
                            })


                        })
                })
                .catch(err => {
                    console.log('Error in Add Land--->>>', err)
                    res.send({
                        status: 400,
                        error: err
                    })
                })

        }
    })
}