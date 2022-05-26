const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role_category', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cat_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'role_category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_role_category_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
