const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// defining user model for user table
db.user = require("../models/user.model.js")(sequelize, Sequelize);

// defining role model for role table
db.role = require("../models/role.model.js")(sequelize, Sequelize);

// defining user_role model for user_role table reationship between user and role
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

// defining user_role model for user_role table reationship between user and role
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

// 
db.ROLES = ["user", "admin", "moderator"];

// defining tutorial model for tutorial table
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);



// defining cropwater model for cropwater table
db.cropwater = require("./old_databse_models/cropwater.model.js")(sequelize, Sequelize);

// defining crop_norms model for crop_norms table
db.crop_norms = require("./old_databse_models/crop_norms.model.js")(sequelize, Sequelize);

module.exports = db;