const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('register_user', {
 
    fullname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cnic: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profession: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    q1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    q2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    q3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'q4.1': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'q4.2': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'q4.3': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'q4.4': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'q4.5': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'q4.6': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    q5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    updated_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'register_user',
    schema: 'public',
    timestamps: false,
   
  });
};
