const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblSurveyForm', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    fullname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cnic_front: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cnic_back: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rabi_crop: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rabi_veg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kharif_crop: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kharif_veg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pattern_years: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    land_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    land_area: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    land_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    land_midpoint: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    water_source: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    water_cost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fertilizer_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fertilizer_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fertilizer_stage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seed_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seed_cost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pesticide_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pesticide_stage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mulching: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mulching_cost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    occupation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cultivationmethod: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cultivationcost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    education: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    modeOfCultivation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sellingPoint: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    leftover: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fertilizerQuantity: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fertilizerType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    weeds: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    disease: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    insects: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    roderts: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    harvestingMethod: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    harvesting_cost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    landPrepCost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seedsTransportCost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fertTransportCost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    electricConsumptionCost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    laborCost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblSurveyForm',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tblSurveyForm_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
