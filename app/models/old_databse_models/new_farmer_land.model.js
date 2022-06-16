const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('new_farmer_land', {
   
    size: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    province: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    district: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tehsil: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    geometry: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    suitablecrops: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    suitabilityupdated: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'new_farmer_land',
    schema: 'public',
    timestamps: false,
   
  });
};
