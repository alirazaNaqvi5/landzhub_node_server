module.exports = app => {
    const Profile = require("../controllers/userProfile.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();
    const multer = require('multer')

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads/')
        },
        filename: function (req, file, cb) {
            const fileName = file.originalname+'PROFILE'+'-'+ Date.now()
            cb(null, fileName.replace(/ /g, '-')+'.jpg')
        }
    })
    const upload = multer({ storage: storage });
    

    // updating profileimage in reqgister_user table based on id
    router.post("/uploadProfileImage",upload.single('Image'), Profile.uploadProfileImage);

    // getting data from new_farmer_land, tbl_farmer_crops table
    router.get("/getdata", Profile.getAllData);


    
    // Authentication middleware
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
      
      app.use('/api/Profile',[authJwt.verifyToken], router);
};