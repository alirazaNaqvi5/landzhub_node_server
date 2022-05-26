const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_general_diseases', {
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
    weeds_eng: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    weeds_urdu: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pest_eng: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pest_urdu: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    disease_eng: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    disease_urdu: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Insect_eng: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Insect_urdu: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    weed_pic: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    insect_pic: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    pest_pic: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    disease_pic: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crop_general_diseases',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crop_general_diseases_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
