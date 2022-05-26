const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Likes', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    BlogId: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Likes',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ix_Likes_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
