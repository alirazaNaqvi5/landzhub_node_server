// module.exports = app => {
//     const cropwater = require("../controllers/cropwater.controller.js");
//     var router = require("express").Router();
//     // Create a new Tutorial
//     router.post("/", cropwater.create);
//     // Retrieve all cropwater
//     router.get("/", cropwater.findAll);
//     // Retrieve all published cropwater
//     router.get("/published", cropwater.findAllPublished);
//     // Retrieve a single Tutorial with id
//     router.get("/:id", cropwater.findOne);
//     // Update a Tutorial with id
//     router.put("/:id", cropwater.update);
//     // Delete a Tutorial with id
//     router.delete("/:id", cropwater.delete);
//     // Create a new Tutorial
//     router.delete("/", cropwater.deleteAll);

//     app.use('/api/cropwater', router);
// };



const { authJwt } = require("../middleware");
const cropwater = require("../controllers/cropwater.controller.js");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/api/cropwater", [authJwt.verifyToken], cropwater.findAll);
};