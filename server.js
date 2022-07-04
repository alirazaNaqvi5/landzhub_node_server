const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const Role = db.role;
db.sequelize.sync();
const { authJwt } = require("./app/middleware");

var corsOptions = {
  origin: "http://localhost:4000"
};

app.use(cors());
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
require('./app/routes/lands.routes')(app);





require("./app/routes/turorial.routes")(app);
require("./app/routes/login.route")(app);




// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});