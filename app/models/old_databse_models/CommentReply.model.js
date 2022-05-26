const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CommentReply', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    replytext: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CommentId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    BlogId: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CommentReply',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "CommentReply_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
