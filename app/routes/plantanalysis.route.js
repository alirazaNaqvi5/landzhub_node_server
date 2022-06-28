module.exports=app=>{
    const router=require('express').Router();
    const multer=require('multer')
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './plant_analysis/')
        },
        filename: function (req, file, cb) {
            const fileName = file.originalname+'PROFILE'+'-'+ Date.now()
            cb(null, fileName.replace(/ /g, '-')+'.jpg')
        }
    })
    const upload = multer({ storage: storage });
    const PlantAnalysis=require('../controllers/plantAnalysis.controller.js');

   router.get("/submit",upload.single('Image'), PlantAnalysis.addPlantAnalysis)
   
    app.use("/plant_analysis", router)
    }