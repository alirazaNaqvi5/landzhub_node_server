const db = require("../models");
const new_farmer_land = db.new_farmer_land;
const crop_record_sub = db.crop_record_sub ;
const crop_record = db.crop_record;
const cropwater = db.cropwater;
const subsub_catagories = db.subsub_catagories;
const sub_catagories = db.sub_catagories;
const crop_land_preparation = db.crop_land_preparation;
const Op = db.Sequelize.Op;
const NodeRSA = require('node-rsa');
// require axios in node
const axios = require('axios');



var key = new NodeRSA({ b: 512 });

var pub = key.exportKey('pkcs8-public-pem');
var pri = key.exportKey('pkcs1-pem').replace(/[\n\r]/g, '').replace('-----BEGIN RSA PRIVATE KEY-----', '').replace('-----END RSA PRIVATE KEY-----', '');
var publen = pri.length
key.importKey(pub, 'pkcs8-public-pem');


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
            var values = {suitablecrops: data,
                suitabilityupdated: Date.now() };
            var condition = {
                where: {
                    id: id,
                    status: {
                        [Op.gt]: '0'
                    }
                }
                }; 
             options = { multi: true };

            new_farmer_land.update(values, condition , options).then((landresult) => {
               
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
                [Op.gt]: '0'
            },
            // [Op.and]:{
            suitabilityupdated: {
                [Op.or] : [
                    null,{[Op.lt]: (Date.now() - 3600000)}
                ]
            }
        // }
        },
        limit: 1,
        order: [
            ['id', 'DESC']
        ]
    }).then(landresult => {
        console.log('landresult=========================================================================>', landresult)
        if (landresult[0] !== undefined) {
            var loc = landresult[0].location.replace('[', '').replace(']', '').split(',')
            assignsuitable(landresult[0].id, loc, 1)
        }
        else {
            console.log('No suitable land found')
        }
    })

}


exports.Interval = ()=> {
    runSuitablity()
  
setInterval(() => {
 
    runSuitablity()


    key = new NodeRSA({ b: 512 });

    pub = key.exportKey('pkcs8-public-pem');
    pri = key.exportKey('pkcs1-pem').replace(/[\n\r]/g, '').replace('-----BEGIN RSA PRIVATE KEY-----', '').replace('-----END RSA PRIVATE KEY-----', '');
    publen = pri.length
    key.importKey(pub, 'pkcs8-public-pem');


}, 432000000)
}

















function getcropimage(crop) {
    return new Promise((resolve, reject) => {
 
        subsub_catagories.findAll({
            attributes: ['images'],
            where: {
                crop: crop
            }
        }).then(result => {
            if (result[0] == undefined) {
                sub_catagories.findAll({
                    attributes: ['images'],
                    where: {
                        crop: crop
                    }
                }).then(result2 => {
                    return result2[0] !== undefined ? resolve('https://greenageservices.pk/assets/images/gallery/' + result2[0]['images']) : resolve(null);
                })
            } else {
                return result[0] !== undefined ? resolve('https://greenageservices.pk/assets/images/gallery/' + result[0]['images']) : resolve(null);
            }
        }
        )

    })
}


function getcropwaterrecord(landrecordid) {

    return new Promise((resolve, reject) => {
       
        cropwater.findAll({
            attributes: ['croplength', 'waterdates', 'ureadays', 'dapdays', 'sopdays', 'sowing', 'created'],
            where: {
                landid: landrecordid
            },
            order: [
                ['created', 'DESC']
            ],
            limit: 1
        }).then(result => {
            return result[0] !== undefined ? resolve(result[0]) : resolve(null);
        }
        )
        .catch(err => {
            reject(err)
        })
    });



}

function getcropwater(landrecordid) {

    return new Promise((resolve, reject) => {
  
        cropwater.findAll({
            where: {
                landid: landrecordid
            },
            order: [
                ['created', 'DESC']
            ],
            limit: 1
        }).then(result => {
            let diffdayglobal = 0
            if (result[0] !== undefined) {
                    
                    var sowingdate = result[0].sowing.split('-');
                    var sowingdatedate = new Date(sowingdate[2], sowingdate[1] - 1, sowingdate[0]);
                    const diffTime = Date.now() - sowingdatedate;
                    const diffDays = diffTime / (1000 * 60 * 60 * 24);
                    if (diffDays > 1) { diffdayglobal = diffDays }
                }
            return result[0] !== undefined ? resolve([JSON.parse(result[0]['simulation']).simulation[diffdayglobal]]) : resolve(null);
        }
        ).catch(err => {
            reject(err)
        }
        )

        
    });

}
// ======================================================================================================================================================

const getallcroprecord = async (landrecordid) => {

    function getrecordprepration(croprecrodid, croplandpreprationid) {

        return new Promise((resolve, reject) => {

        

            crop_record_sub.findAll({
                where: {
                    crop_record_id: croprecrodid,
                    crop_land_preparation_id: croplandpreprationid
                }
            }).then(result => {
                    
                    return result[0] !== undefined ? resolve("Checked") : resolve("Not Checked")
    
                }
            )
            .catch(err => {
                reject(err)
            })
        })
    };
    function getcroplandprepration(croprecordid, crop) {

        return new Promise((resolve, reject) => {

            

            crop_land_preparation.findAll({
                where: {
                    crop: crop
                }
            }).then(result => {
                if (result[0] !== undefined) {
                    result.map(async (obj) => {
                        const checked = await getrecordprepration(croprecordid, obj.id)
                        obj.checked = checked
                        return obj
                    }
                    )
                }
                return result[0] !== undefined ? resolve(result) : resolve(' dont have any record');
            })
            .catch(err => {
                reject(err)
            })


        });

    }

    function getcroprecord() {

        return new Promise((resolve, reject) => {
            
            crop_record.findAll({
                where: {
                    status: {
                        [Op.gt]: '0'
                    },
                    land_id: landrecordid
                }
            }).then(result => {
                if (result[0] !== undefined) {
                    getcroplandprepration(result[0].id, result[0].crop).then(async (data) => {
                        result[0].crop_land_preparation = data
                        result[0].image = await getcropimage(result[0].crop)
                        await resolve(result[0])
                    })
                } else {
                    resolve('null')
                }
            }
            ).catch(err => {
                reject(err)
            })
            
        });

    }

    return await getcroprecord()

}

































exports.getData = (req, res) => {
    if (req.query.uid == undefined || req.query.page == undefined) { throw res.send('INVALID REQUEST') }
    let startIndex = ((req.query.page * 5) - 5);
    new_farmer_land.findAll({
        where: {
            status: {
                [Op.gt]: '0'
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













exports.addData = (req, res) => {
    new_farmer_land.findAll({
        where: {
            status: '1',
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
                status: '1',
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


// delete land record based on id
exports.deleteData = (req, res) => {
    new_farmer_land.destroy({
        where: {
            id: req.query.id
        }
    }).then(result => {
        res.send(result)
    }
    ).catch(err => {
        res.send({
            status: 400,
            error: err
        })
    }
    )
}