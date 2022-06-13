const db = require("../models");
const Cropwater = db.cropwater;
const new_farmer_land = db.new_farmer_land;
const axios = require("axios")


exports.getIndicesByCropID = (req, res) => {
    if (req.query.cropid == undefined) {
        res.send("Please provide cropid")
    }
    else {
        var cropid = req.query.cropid;
        Cropwater.findAll({
            where: {
                cropid: cropid
            },
            attributes: ['indices']
        }).then(result => {
            res.send(result)
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Promo_ticker."
            });
        }
        );
    }
}





const landgeom = (id, type) => {
    return new Promise((resolve, reject) => {
        new_farmer_land.findAll({
            where: {
                id: id
            }
        }).then(result => {
            if (result.length > 0) {
                var data = {
                    'geometry': result[0].geometry
                };
                axios.post('https://www.api.greenageservices.pk/indices/' + type, data)
                    .then(function (response) {
                        resolve(response.data);
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            }
            else {
                reject("No Data Found")
            }
        })
    })
}




const cropsims = () => {
    return new Promise((resolve, reject) => {
        Cropwater.findAll({
            where: {
                status: 0
            },
            attributes: ['landid', 'indices'],
            distinct: true
        }).then(result => {
            if (result.length > 0) {
                result.map(async (item) => {
                    var ndvi = await landgeom(item.landid, 'ndvi')
                    var recl = await landgeom(item.landid, 'recl')
                    var msavi = await landgeom(item.landid, 'msavi')
                    var ndre = await landgeom(item.landid, 'ndre')

                    // get current timestamp
                    var d = new Date();
                    var n = d.getTime();
                    var timestamp = n;

                    if (item.indices != null) {
                        // 6 days difference
                        if (item.indices.date - timestamp > 345600000) {

                            var updatedindices = {
                                date: timestamp,
                                data: {
                                    date: timestamp,
                                    ndvi: Object.assign(ndvi, item.indices.ndvi),
                                    recl: Object.assign(recl, item.indices.recl),
                                    msavi: Object.assign(msavi, item.indices.msavi),
                                    ndre: Object.assign(ndre, item.indices.ndre)
                                }
                            }

                            Cropwater.update({
                                indices: JSON.stringify(updatedindices),
                                status: 1
                            }, {
                                where: {
                                    landid: item.landid
                                }
                            }).then(result => {
                                resolve('INDICE UPDATED for landid: ' + item.landid)
                            }
                            )

                        } else {

                            var updatedindices = {
                                date: timestamp,
                                data: {
                                    date: timestamp,
                                    ndvi: ndvi,
                                    recl: recl,
                                    msavi: msavi,
                                    ndre: ndre
                                }
                            }

                            Cropwater.update({
                                indices: JSON.stringify(updatedindices),
                                status: 1
                            }, {
                                where: {
                                    landid: item.landid
                                }
                            }).then(result => {
                                resolve('Indices ADDED for landid ' + item.landid)
                            }
                            )
                        }
                    } else {
                        resolve("No Data Found")
                    }
                })

            }
        })
    })
}



exports.Interval = () => {
    setInterval(() => {
        console.log("CROPWATER INDICES ruuning")
        cropsims().then(res => { console.log(res) })
    }, 86400000);

    // 1 minute timeout
    setTimeout(() => {
        console.log("CROPWATER INDICES ruuning")
        cropsims().then(res => { console.log(res) })
    }, 60000)
}