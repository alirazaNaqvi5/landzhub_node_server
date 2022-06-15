var DataTypes = require("sequelize").DataTypes;
var _tbl_fertilizer_requirements = require("./tbl_fertilizer_requirements");

function initModels(sequelize) {
  var tbl_fertilizer_requirements = _tbl_fertilizer_requirements(sequelize, DataTypes);


  return {
    tbl_fertilizer_requirements,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
