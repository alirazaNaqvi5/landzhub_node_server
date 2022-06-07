module.exports = app => {
    const land_lease = require("../controllers/land_lease.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();
    const multer = require('multer');


    const FILE_TYPE_MAP = {
        'image/png': 'png',
        'image/jpeg': 'jpeg',
        'image/jpg': 'jpg'
    }
    
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            const isValid = FILE_TYPE_MAP[file.mimetype]
            let uploadError = new Error("Invalid Image type");
            if (isValid) {
                uploadError = null
            }
            cb(uploadError, './Land_lease')
        },
        filename: function (req, file, cb) {
            const fileName = file.originalname;
            const extension = FILE_TYPE_MAP[file.mimetype]
    
            cb(null, `${fileName}`)
        }
    })
    
    
    const upload = multer({ storage: storage });




    router.post('/addland_lease',upload.array('Image', 5), land_lease.addland_lease);

    // getAll land_lease data from land_lease table
    router.get("/getAll", land_lease.getAll);

    // getAll leased land data from land_lease table
    router.get("/getleaseLand", land_lease.getleaseLand);

    // get leased laqnd that are disaproved from land_lease table
    router.get("/getleaseLand_disapproved", land_lease.getleaseLand_disapproved);

    // get nearestLandLease data from land_lease table
    router.get("/nearestLandLease", land_lease.nearestLandLease);




        
    // Authentication middleware
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
      
    app.use('/api/land_lease',[authJwt.verifyToken], router);
};