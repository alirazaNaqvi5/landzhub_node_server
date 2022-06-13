const db = require("../models");
const Cropwater = db.cropwater;

const Op = db.Sequelize.Op;



// Create and Save a new Tutorial
exports.create = (req, res) => {

  const body = req.body

  const sowingdate = body.day + "-" + body.month + "-" + body.year

  // var check = 'SELECT * FROM `cropwater` WHERE (userid=' + body.uid + ' AND landid=' + body.landid + ') ORDER BY created DESC LIMIT 1 '
  // greenagedbconn.query(check, (err, result) => {
  //     if (err) res.send(err)
  //     else {
  //         if (result.length > 0) {
  //             res.send(JSON.parse(result[0].simulation))
  //         } else {
  //             //////////////............... NEW CROP WATER STARTS HERE ............/////////////////
  //             //////////////////////////////////////////////////////////////////////////////////////
  //             //////////////////////////////////////////////////////////////////////////////////////
  //             //////////////////////////////////////////////////////////////////////////////////////
  //             //////////////////////////////////////////////////////////////////////////////////////

  //             axios({
  //                 method: 'GET',
  //                 url: "https://greenageservices.pk/Api_greenage/Crop_water/Crop_water_req?latitude=" + body.lat + "&longitude=" + body.lon + "&miles=5000&season=" + body.season + "&IrrigationApplied=0&crop=" + body.crop + "&sowingdate=" + body.year + "-" + body.month + "-" + body.day + "",
  //                 headers: {
  //                     "Greenage": body.key,
  //                 }
  //             })
  //                 .then(function (response) {

  //                     const dd = response.data.list
  //                     ////////////////////////

  //                     const waterdates = (dd.simulation.filter(obj => obj['Irrigation Required'] == "Yes"))
  //                         .map(obj => ({ "day": obj.crop_day, "stage": obj["crop stage"], "applied": false }))

  //                     var tempdatesarr = []

  //                     const ureadates = (dd.simulation.filter(obj => obj['fertilizer_split_doses_urea'] != "0" && obj['fertilizer_split_doses_urea'] != null && obj['fertilizer_split_doses_urea'] != "Not Recommended"))
  //                         .map(obj => ({ "day": obj.crop_day, "stage": obj["crop stage"], "applied": false }))
  //                         .filter((obj) => {
  //                             if (!tempdatesarr.includes(obj.stage)) {
  //                                 tempdatesarr.push(obj.stage)
  //                                 return obj
  //                             }
  //                         })

  //                     var tempdaparr = []


  //                     const dapdates = (dd.simulation.filter(obj => obj['fertilizer_split_doses_dap'] != "0" && obj['fertilizer_split_doses_dap'] != null && obj['fertilizer_split_doses_dap'] != "Not Recommended"))
  //                         .map(obj => ({ "day": obj.crop_day, "stage": obj["crop stage"], "applied": false }))
  //                         .filter((obj) => {
  //                             if (!tempdaparr.includes(obj.stage)) {
  //                                 tempdaparr.push(obj.stage)
  //                                 return obj
  //                             }
  //                         })

  //                     var tempsoparr = []

  //                     const sopdates = (dd.simulation.filter(obj => obj['fertilizer_split_doses_sop'] != "0" && obj['fertilizer_split_doses_sop'] != null && obj['fertilizer_split_doses_sop'] != "Not Recommended"))

  //                         .map(obj => ({ "day": obj.crop_day, "stage": obj["crop stage"], "applied": false }))
  //                         .filter((obj) => {
  //                             if (!tempsoparr.includes(obj.stage)) {
  //                                 tempsoparr.push(obj.stage)
  //                                 return obj
  //                             }
  //                         })

  //                     var sql = "INSERT INTO `cropwater`( `userid` , `cropid` , `crop` , `simulation` , `landid` , `croplength` , `waterdates` , `ureadays` , `dapdays` , `sopdays` , `sowing` ) VALUES (" + body.uid + "," + body.cropid + ",'" + body.crop + "','" + JSON.stringify(dd) + "'," + body.landid + "," + dd.crop_length + ",'" + JSON.stringify(waterdates) + "','" + JSON.stringify(ureadates) + "','" + JSON.stringify(dapdates) + "','" + JSON.stringify(sopdates) + "','" + sowingdate + "')"

  //                     greenagedbconn.query(sql, (error, result) => {
  //                         if (error) { console.log(error) }
  //                         res.send(dd)
  //                     })


  //                     ///////////////////////////////

  //                 })
  //                 .catch(err => {
  //                     console.log(err)
  //                     res.send({ "status": 0, "message": err })
  //                 })


  //             ///////////////////////////////////////////////////////////////////////////////////////
  //             ///////////////////////////////////////////////////////////////////////////////////////
  //             ///////////////////////////////////////////////////////////////////////////////////////
  //             ///////////////////////////////////////////////////////////////////////////////////////
  //         }
  //     }
  // })

  /////////////////////////////////////////////////////////////////////////////////////////////////

  Cropwater.findAll({
    where: {
      
          [Op.and]: [
            {
              userid: body.uid,
            },
            {
              landid: body.landid,
            }
          ]
    },
    order: [
      ['created', 'DESC']
    ],
    limit: 1


  }).then(result => {
    if (result.length > 0) {
      res.send(result[0].simulation)
    }
    else {
      //////////////............... NEW CROP WATER STARTS HERE ............/////////////////
      //////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////

      axios({
        method: 'GET',
        url: "https://greenageservices.pk/Api_greenage/Crop_water/Crop_water_req?latitude=" + body.lat + "&longitude=" + body.lon + "&miles=5000&season=" + body.season + "&IrrigationApplied=0&crop=" + body.crop + "&sowingdate=" + body.year + "-" + body.month + "-" + body.day + "",
        headers: {
          "Greenage": body.key,
        }
      })
        .then(function (response) {

          const dd = response.data.list
          ////////////////////////
          const waterdates = (dd.simulation.filter(obj => obj['Irrigation Required'] == "Yes"))
            .map(obj => ({ "day": obj.crop_day, "stage": obj["crop stage"], "applied": false }))

          var tempdatesarr = []

          const ureadates = (dd.simulation.filter(obj => obj['fertilizer_split_doses_urea'] != "0" && obj['fertilizer_split_doses_urea'] != null && obj['fertilizer_split_doses_urea'] != "Not Recommended"))
            .map(obj => ({ "day": obj.crop_day, "stage": obj["crop stage"], "applied": false }))
            .filter((obj) => {
              if (!tempdatesarr.includes(obj.stage)) {
                tempdatesarr.push(obj.stage)
                return obj
              }
            }
            )

          var tempdaparr = []

          const dapdates = (dd.simulation.filter(obj => obj['fertilizer_split_doses_dap'] != "0" && obj['fertilizer_split_doses_dap'] != null && obj['fertilizer_split_doses_dap'] != "Not Recommended"))
            .map(obj => ({ "day": obj.crop_day, "stage": obj["crop stage"], "applied": false }))
            .filter((obj) => {
              if (!tempdaparr.includes(obj.stage)) {
                tempdaparr.push(obj.stage)
                return obj
              }
            }
            )

          var tempsoparr = []

          const sopdates = (dd.simulation.filter(obj => obj['fertilizer_split_doses_sop'] != "0" && obj['fertilizer_split_doses_sop'] != null && obj['fertilizer_split_doses_sop'] != "Not Recommended"))
            .map(obj => ({ "day": obj.crop_day, "stage": obj["crop stage"], "applied": false }))
            .filter((obj) => {
              if (!tempsoparr.includes(obj.stage)) {
                tempsoparr.push(obj.stage)
                return obj
              }
            }
            )
          Cropwater.create({
            userid: body.uid,
            cropid: body.cropid,
            crop: body.crop,
            simulation: JSON.stringify(dd),
            landid: body.landid,
            croplength: dd.crop_length,
            waterdates: JSON.stringify(waterdates),
            ureadates: JSON.stringify(ureadates),
            dapdates: JSON.stringify(dapdates),
            sopdates: JSON.stringify(sopdates),
            sowing: sowingdate
          }).then(result => {
            res.send(dd)
          }
          ).catch(err => {
            console.log(err)
          }
          )
      

        }
        ).catch(err => {
          console.log(err)
          res.send({ "status": 0, "message": err })
        }
        )
    }
   } )


};