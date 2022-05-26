const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crops', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    crop: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    rotation_group: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    frost_tolerant: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    feeding: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    companions: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    spacing: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    sowandplant: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    harvesting: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    images: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    urdu_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_completed: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crops',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crops_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
