const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('set_order_detail', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    assign_date_time: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assign_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    delivered_date_time: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    delivered_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dispatched_date_time: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dispatched_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_assigned: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    order_placed_date: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cancel_date_time: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    order_status: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    preparing_date_time: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    preparing_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_price: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    latlong: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
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
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payment_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    notify: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'set_order_detail',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_set_order_detail_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
