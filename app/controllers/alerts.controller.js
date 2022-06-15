const db = require('../models');
const Op = db.Sequelize.Op;
const Alert = db.alerts
exports.getAlerts = (req, res) => {
    Alert.findAll({
        where: {
            status: {
                [Op.gt]: 0
            }
        }
    })
        .then(alerts => {
            res.json({
                "success": true,
                "code": 200,
                "message": "Get Alerts record Successfully",
                "data": alerts
            });
        })

        .catch(err => {
            res.send("error" + err);
        })


}


exports.update_alert = (req, res) => {

    Alert.update({
        status: req.body.status
    }, {
        where: {
            id: req.body.id
        }
    })
        .then(data => {
            res.json({
                "success": true,
                "code": 200,
                "message": "Update Alerts record Successfully",
                "data": data
            });
        })

        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while updating the alert."

            });
        }
        );
}


exports.addAlert = (req, res) => {
    const file = req.file.filename
    const filename = 'https://api.greenageservices.pk/alertuploads/' + file
    const alertData = {
        status: req.body.status,
        attachment: filename,
        title: req.body.title,
        description: req.body.description,
        valid: req.body.valid
      
    }
    Alert.create(alertData)
        .then(record => {
          res.send(record)
        })
        .catch(err => {
            res.send("error" + err);
        })


}