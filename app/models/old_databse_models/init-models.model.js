var DataTypes = require("sequelize").DataTypes;
var _e_admin = require("./e_admin");

function initModels(sequelize) {
  var e_admin = _e_admin(sequelize, DataTypes);


  return {
    e_admin,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
