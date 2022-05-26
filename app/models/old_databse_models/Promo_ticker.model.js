const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Promo_ticker', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    ticker: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Promo_ticker',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_Promo_ticker_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
