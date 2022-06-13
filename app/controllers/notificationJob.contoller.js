const db = require('../models');
const notifications = db.notifications;
const Cropwater = db.cropwater;
const new_farmer_land = db.new_farmer_land;

exports.findUserId = (req, res) => {
    const user_id = req.body.user_id;
    notifications.findAll({
        where: {
            userid: user_id
        }
    })
        .then(data => {
            res.send(data)
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Promo_ticker."
            });
        }
        );
}



function generateNotification() {

    

    Cropwater.findAll({
        attributes: ['landid'],
        distinct: true,
    }).then(Mainresult => {
        for (let i = 0; i < Mainresult.length; i++) {
            Cropwater.findAll({
                where: {
                    landid: Mainresult[i].landid
                },
                order: [
                    ['created', 'DESC']
                ],
                limit: 1
            }).then(result => {
                let sowing = result[0].sowing;
                let dayDiff = new Date().getTime() - new Date(sowing.slice(6, 10) + "-" + sowing.slice(3, 5) + "-" + sowing.slice(0, 2)).getTime();
                dayDiff = dayDiff / (1000 * 3600 * 24);
                if (Math.floor(dayDiff) == 11) {
                    new_farmer_land.findAll({
                        attributes: ['name'],
                        where: {
                            id: result[0].landid
                        }
                    }).then(innerresult => {
                        let waterDate = [{
                            "title": "11 din ho gy fasal ko, paani laga den.. Shukriyaaaa",
                            "land-name": innerresult[0].name
                        }]

                        notifications.findAll({
                            where: {
                                landid: result[0].landid
                            }
                        }).then(checkResult => {
                            if (checkResult.length !== 0) {

                                notifications.update({
                                    notification: JSON.stringify(waterDate)
                                }, {
                                    where: {
                                        landid: result[0].landid
                                    }
                                })
                            }
                            else {
                                notifications.create({
                                    landid: result[0].landid,
                                    notification: JSON.stringify(waterDate),
                                    userid: result[0].userid
                                })
                            }
                        })
                    })
                }
                else if (Math.floor(dayDiff) == 57) {
                    new_farmer_land.findAll({
                        attributes: ['name'],
                        where: {
                            id: result[0].landid
                        }
                    }).then(innerresult => {
                        let waterDate = [{
                            "title": "57 din ho gy fasal ko, paani laga den.. Shukriyaaaa",
                            "land-name": innerresult[0].name
                        }]

                        notifications.findAll({
                            where: {
                                landid: result[0].landid
                            }
                        }).then(checkResult => {
                            if (checkResult.length !== 0) {

                                notifications.update({
                                    notification: JSON.stringify(waterDate)
                                }, {
                                    where: {
                                        landid: result[0].landid
                                    }
                                })
                            }
                            else {
                                notifications.create({
                                    landid: result[0].landid,
                                    notification: JSON.stringify(waterDate),
                                    userid: result[0].userid
                                })
                            }

                        })

                    })
                }


                else if (dayDiff > 0 && dayDiff < 11) {
                    new_farmer_land.findAll({
                        attributes: ['name'],
                        where: {
                            id: result[0].landid
                        }
                    }).then(innerresult => {
                        let date = new Date(sowing.slice(6, 10) + "-" + sowing.slice(3, 5) + "-" + sowing.slice(0, 2));

                        date.setDate(date.getDate() + 11)
                        let waterDate = [{
                            "title": "Crop Water Notification",
                            "land-name": innerresult[0].name,
                            "upComingDate": date
                        }]
                        notifications.findAll({
                            where: {
                                landid: result[0].landid
                            }
                        }).then(checkResult => {
                            if (checkResult.length !== 0) {

                                notifications.update({
                                    notification: JSON.stringify(waterDate)
                                }, {
                                    where: {
                                        landid: result[0].landid
                                    }
                                })
                            }
                            else {
                                notifications.create({
                                    landid: result[0].landid,
                                    notification: JSON.stringify(waterDate),
                                    userid: result[0].userid
                                })
                            }
                        })

                    })


                }
                else if (dayDiff > 11) {
                    new_farmer_land.findAll({
                        attributes: ['name'],
                        where: {
                            id: result[0].landid
                        }
                    }).then(innerresult => {
                        let date = new Date(sowing.slice(6, 10) + "-" + sowing.slice(3, 5) + "-" + sowing.slice(0, 2));
                        date.setDate(date.getDate() + 57)
                        let waterDate = [{
                            "title": "Crop Water Notification",
                            "land-name": innerresult[0].name,
                            "upComingDate": date
                        }]
                        notifications.findAll({
                            where: {
                                landid: result[0].landid
                            }
                        }).then(checkResult => {
                            if (checkResult.length !== 0) {

                                notifications.update({
                                    notification: JSON.stringify(waterDate)
                                }, {
                                    where: {
                                        landid: result[0].landid
                                    }
                                })
                            }
                            else {
                                notifications.create({
                                    landid: result[0].landid,
                                    notification: JSON.stringify(waterDate),
                                    userid: result[0].userid
                                })
                            }
                        })
                    })
                }




            })
        }
    })
}


exports.Interval = function () {
    setInterval(() => {
        console.log("Interval for notifications is running")
        generateNotification();
    }
    ,5000)
}