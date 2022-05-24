module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
//     const Tutorial = sequelize.define('tutorial', {
//     id: {
//       autoIncrement: true,
//       autoIncrementIdentity: true,
//       type: Sequelize.BIGINT,
//       allowNull: false,
//       primaryKey: true
//     },
//     title: {
//       type: Sequelize.STRING(255),
//       allowNull: false
//     },
//     text: {
//       type: Sequelize.TEXT,
//       allowNull: false
//     },
//     userId: {
//       type: Sequelize.BIGINT,
//       allowNull: false
//     },
//     status: {
//       type: Sequelize.SMALLINT,
//       allowNull: false
//     },
//     attachement: {
//       type: Sequelize.STRING(255),
//       allowNull: true
//     }
//   }, {
//     sequelize,
//     tableName: 'Blogs',
//     schema: 'public',
//     timestamps: true,
//     indexes: [
//       {
//         name: "Blogs_pkey",
//         unique: true,
//         fields: [
//           { name: "id" },
//         ]
//       },
//     ]
//   });
    return Tutorial;
  };