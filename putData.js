const db = require("./app/models");
db.sequelize.sync();
const Crop_norms = db.cropwater;
const axios = require("axios")

const Op = db.Sequelize.Op;



axios.get("https://www.api.greenageservices.pk/cropinfo/test_test").then(res => {
  // console.log(res.data);
  res.data.forEach((element, id) => {
    Crop_norms.create(element)
          .then(data => {
              console.log("data inserted", id);
          })
          .catch(err => {
              console.log("error at ======", id, "=====>" , err);
          });
  })

});