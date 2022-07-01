module.exports = function (app) {
    const { authJwt } = require("../middleware");
    const faqs = require("../controllers/faqs.controller.js");
    var router = require("express").Router();

    // Add new data in cropwater table
    router.post("/getcrops", faqs.getCropsFromCropNorms);

    // get "sub_stage" from "crop_stages" bsed on crop name.
    router.post("/substages", faqs.getSubStageBasedOnCrop);

    router.post("/getCategories", faqs.getCategoriesList);

    router.post("/getAllQA", faqs.getAllQA);

    router.get("/getPromo", faqs.getPromo);



    app.use("/faqs", router);
};