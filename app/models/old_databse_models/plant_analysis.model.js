const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plant_analysis', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    userId :{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    adminResponse: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    }
  }, {
    sequelize,
    tableName: 'plant_analysis',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_plant_analysis_id",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
