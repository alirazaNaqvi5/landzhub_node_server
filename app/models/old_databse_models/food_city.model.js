const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food_city', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    city_name: {
      type: DataTypes.STRING(70),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'food_city',
    schema: 'public',
    timestamps: false
  });
};
