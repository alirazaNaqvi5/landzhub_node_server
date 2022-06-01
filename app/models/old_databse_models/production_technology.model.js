const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('production_technology', {
    
    crop_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'production_technology',
    schema: 'public',
    timestamps: false,
    
  });
};
