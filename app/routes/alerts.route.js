module.exports = app => {
    const router = require('express').Router();
    const multer = require('multer')
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './alertuploads/')
        },
        filename: function (req, file, cb) {
            const fileName = file.originalname + 'PROFILE' + '-' + Date.now()
            cb(null, fileName.replace(/ /g, '-') + '.jpg')
        }
    })
    const upload = multer({ storage: storage });
    const Alert = require('../controllers/alerts.controller');
    router.get('/alerts', Alert.getAlerts);
    router.put("/update", Alert.update_alert)
    router.post("/addalert", upload.single('Image'), Alert.addAlert)


    app.use("/api/alerts", router);
}