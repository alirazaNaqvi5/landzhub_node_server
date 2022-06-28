const db = require("./app/models");
db.sequelize.sync();
const Crop_norms = db.faqs;
const axios = require("axios")

const Op = db.Sequelize.Op;



axios.get("https://www.greenageservices.pk/Faqs/addfaqs/getCat").then(res => {
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