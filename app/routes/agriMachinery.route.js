module.exports = app => {
    const router = require('express').Router();
    const multer = require('multer')
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './agriMachineryPictures/')
        },
        filename: function (req, file, cb) {
            const fileName = file.originalname + 'PROFILE' + '-' + Date.now()
            cb(null, fileName.replace(/ /g, '-') + '.jpg')
        }
    })
    const upload = multer({ storage: storage });
    const AgriMachinery = require('../controllers/agriMachinery.controller');

    router.get('/getalldata', AgriMachinery.getAgriMachinery);
    router.get('/deletebyage', AgriMachinery.updateagriMachinery);
    router.post('/test', upload.single('Image'), AgriMachinery.addAgriMachinery);

    app.use("/agriMachinery", router);
}