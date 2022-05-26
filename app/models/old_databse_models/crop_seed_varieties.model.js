const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_seed_varieties', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    crop: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    seed_variety: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crop_seed_varieties',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crop_seed_varieties_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
