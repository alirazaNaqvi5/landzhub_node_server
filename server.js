const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const Role = db.role;
db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to node-jwt-auth application." });
});


// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   Role.create({
//     id: 2,
//     name: "moderator"
//   });
 
//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }





require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/Agri_Reports/agri_reports.routes')(app);
require("./app/routes/cropwater.routes")(app);
require("./app/routes/crop_norms.routes")(app);
require("./app/routes/lime_material.routes")(app);
require("./app/routes/mandiRates.routes")(app);
require("./app/routes/soilTesting.routes")(app);
require("./app/routes/pollution_Remidation.routes")(app);
require("./app/routes/production_technology.routes")(app);
require("./app/routes/Promo_ticker.routes")(app);
require("./app/routes/userProfile.routes")(app);
require("./app/routes/land_lease.routes")(app);
require("./app/routes/landRecord.routes")(app);
require("./app/routes/cropwater.routes")(app);
require("./app/routes/notificationjob.routes")(app);
require("./app/routes/indicesjob.routes")(app);




require("./app/routes/turorial.routes")(app);





// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});