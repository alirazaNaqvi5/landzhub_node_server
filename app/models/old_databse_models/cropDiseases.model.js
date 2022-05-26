const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cropDiseases', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    crop_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    disease_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cropDiseases',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cropDiseases_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
