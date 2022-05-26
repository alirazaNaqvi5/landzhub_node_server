module.exports = app => {
    const crop_norms = require("../controllers/crop_norms.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", crop_norms.create);
    // Retrieve all crop_norms
    router.get("/", crop_norms.findAll);
    // Retrieve all published crop_norms
    router.get("/published", crop_norms.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", crop_norms.findOne);
    // Update a Tutorial with id
    router.put("/:id", crop_norms.update);
    // Delete a Tutorial with id
    router.delete("/:id", crop_norms.delete);
    // Create a new Tutorial
    router.delete("/", crop_norms.deleteAll);




    
    app.use('/api/crop_norms', router);
  };