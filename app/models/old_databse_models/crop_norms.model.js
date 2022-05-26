const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_norms', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    crop: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    water_logged: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sowing_seed_depth: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    importance: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    end_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    base_temp: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    crop_days: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    province: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ger_min: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ger_max: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    veg_min: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    veg_max: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rep_min: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rep_max: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    avg_germ_days: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    suitable_min: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    suitable_max: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nominal_min: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nominal_max: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    weak_min: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    weak_max: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    root_depth_meter: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MAD_per: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    silt: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sand: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    clay: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sandy_loam: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    loam: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    loamy_sand: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    silt_loam: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sandy_clay_loam: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    clay_loam: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    silty_clay_loam: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    silty_clay: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    season: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    soil_ec: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    crop_family: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    scientific_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    scientific_family: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    last_updated_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "0"
    },
    seedrate: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    crop_urdu: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'crop_norms',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crop_norms_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
