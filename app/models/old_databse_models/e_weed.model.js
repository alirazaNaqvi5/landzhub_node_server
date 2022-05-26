const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_weed', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    stage_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    weeds_eng: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weeds_urdu: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prevention: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    prevention_urdu: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    weeds_img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    added_by: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edit_by: {
      type: DataTypes.STRING,
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edit_date: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_weed',
    schema: 'public',
    timestamps: false
  });
};
