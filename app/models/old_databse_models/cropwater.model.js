module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cropwater', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    cropid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    landid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    crop: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    croplength: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    waterdates: {
      type: DataTypes.JSON,
      allowNull: false
    },
    ureadays: {
      type: DataTypes.JSON,
      allowNull: false
    },
    dapdays: {
      type: DataTypes.JSON,
      allowNull: false
    },
    sopdays: {
      type: DataTypes.JSON,
      allowNull: false
    },
    simulation: {
      type: DataTypes.JSON,
      allowNull: false
    },
    sowing: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cropwater',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cropwater_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
