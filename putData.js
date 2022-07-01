const db = require("./app/models");
db.sequelize.sync();
const Crop_norms = db.Promo;
const axios = require("axios")

const Op = db.Sequelize.Op;



axios.get("https://www.greenageservices.pk/Faqs/showpromo/test").then(res => {
  // console.log(res.data);
  res.data.forEach(({id, title, image, status}) => {
    Crop_norms.create({id, title, image, status})
          .then(data => {
              console.log("data inserted", id);
          })
          .catch(err => {
              console.log("error at ======", id, "=====>" , err);
          });
  })

});