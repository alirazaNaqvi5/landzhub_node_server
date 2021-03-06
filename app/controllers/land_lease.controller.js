const { nearest } = require("turf");
const { sequelize } = require("../models");
const db = require("../models");
const new_farmer_land = db.new_farmer_land;
const landlease = db.landlease;
const Op = db.Sequelize.Op;
const soil_samples_punjab = db.soil_samples_punjab;

exports.addland_lease = (req, res) => {
    const file = req.body.filename
    const cnic = JSON.stringify(req.body.cnic)
    const filename = JSON.stringify(file)
    const land_id = req.body.land_id
    const location = req.body.coords
    const lat = req.body.lat
    const lon = req.body.lon
    const landtype = req.body.landType
    const start = req.body.start

    const q1 = req.body.q1
    const q2 = req.body.q2
    const q3 = req.body.q3
    const q4 = req.body.q4
    const q5 = JSON.stringify(req.body.q5)
    const q6 = req.body.q6

    landlease.create({
        land_id: land_id,
        cnic: cnic,
        filename: filename,
        location: location,
        lat: lat,
        lon: lon,
        landtype: landtype,
        start: start,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        q6: q6
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


// getting all data from land_lease table
exports.getAll = (req, res) => {
    landlease.findAll({
        where: {
            status: '1'
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

// getting all data from land_lease table of leased lands
exports.getleaseLand = (req, res) => {
    landlease.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Promo_ticker."
            });
        }
        );
}

// getting data of disapproved land_lease table
exports.getleaseLand_disapproved = (req, res) => {
    landlease.findAll({
        where: {
            status: '-1'
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
        }
        );
}

// get nearestLandLease recrods based on lat and lon
exports.nearestLandLease = (req, res) => {


    const getlandrecord = (id) => {

        return new Promise((resolve, reject) => {


            new_farmer_land.findAll({
                where: {
                    id: id
                }
            })
                .then(data => {
                    resolve(data[0])
                })

        })

    }

    const getlandlease = (id, lat, lng) => {
        return new Promise((resolve, reject) => {



            landlease.findAll({
                where: {
                    lat: {
                        [Op.lt]: lat + 0.2,
                        [Op.gt]: lat - 0.2
                    },
                    lon: {
                        [Op.lt]: lng + 0.2,
                        [Op.gt]: lng - 0.2
                    },
                    landid: id
                }
            })
                .then(data => {
                    resolve(data)
                })

        })
    }

    // SELECT `landid` FROM `landlease` WHERE lat < ? +0.2 and ? > 33.6-0.2 and lon < ? +0.2 and lon > ? -02
    landlease.findAll({
        where: {
            lat: {
                [Op.lt]: req.body.lat + 0.2,
                [Op.gt]: req.body.lat - 0.2
            },
            lon: {
                [Op.lt]: req.body.lon + 0.2,
                [Op.gt]: req.body.lon - 0.2
            }
        }
    })
        .then(async (resData) => {

            let data = await resData.map(async (item, i) => {
                //  let tempData;



                const a = await getlandrecord(item.landid)
                const b = await getlandlease(item.landid, req.query.lat, req.query.lng)

                return { "record": b.concat(a) }


            })
            res.send(await Promise.all(data))

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        }
        );


}

exports.getleaseLand_approved = (req, res) => {
    let startIndex = ((req.query.page * 5) - 5);
    landlease.findAll({
        attributes: ['landid'],
        where: {
            status: '1'
        },
        limit: 5,
        offset: startIndex
    }).then(async(result) => {

        const getlandrecord = (id) => {

            return new Promise((resolve, reject) => {

                // greenagedbconn.query("SELECT * FROM `new_farmer_land` WHERE `id`= '" + id + "' ", (err, result) => {

                //     if (err) { reject(err) } else {

                //         resolve(result[0])
                //     }
                // })
                new_farmer_land.findAll({
                    where: {
                        id: id
                    }
                }).then(data => {
                    resolve(data[0])
                })
                .catch(err => {
                    reject(err)
                })
            })

        }

        const getlandlease = (id) => {
            return new Promise((resolve, reject) => {

                // greenagedbconn.query("SELECT * FROM `landlease` WHERE `landid`='" + id + "' ", (err, result) => {

                //     if (err) { reject(err) } else {

                //         resolve(result)
                //     }

                // })
                landlease.findAll({
                    where: {
                        landid: id
                    }
                }).then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                }
                )
            })
        }


        let data = await result.map(async (item, i) => {
            //  let tempData;



            const a = await getlandrecord(item.landid)
            const b = await getlandlease(item.landid)

            return { "record": b.concat(a) }


        })

        res.send(await Promise.all(data))






    })

}