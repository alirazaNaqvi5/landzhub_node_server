const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AgriMachinery', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Age: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Designation: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Agri_machinery',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_Agri_machinery_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
// npx sequelize-auto -o "./models" -d dataofmysql -h 192.168.100.17 -u postgres -p 5432 -x greenage -e postgres -t alerts