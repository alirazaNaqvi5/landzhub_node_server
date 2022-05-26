const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_stages', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    crop: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    crop_family: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sub_stage: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sub_stages_urdu: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    s_gdd: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    e_gdd: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    kc: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    stage_no: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    stage_image: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    added_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    added_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    edit_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    edited_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'crop_stages',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crop_stages_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
