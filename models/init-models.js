var DataTypes = require("sequelize").DataTypes;
var _alerts = require("./alerts");

function initModels(sequelize) {
  var alerts = _alerts(sequelize, DataTypes);


  return {
    alerts,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
