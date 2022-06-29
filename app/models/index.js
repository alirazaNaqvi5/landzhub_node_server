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

// defining ph_requirement model for ph_requirement table
db.ph_requirement = require("./old_databse_models/ph_requirement.model.js")(sequelize, Sequelize);

// defining tbl_fertilizer_requirements model for tbl_fertilizer_requirements table
db.tbl_fertilizer_requirements = require("./old_databse_models/tbl_fertilizer_requirements.model.js")(sequelize, Sequelize);

// defining tbl_rates model for tbl_rates table
db.tbl_rates = require("./old_databse_models/tbl_rates.model.js")(sequelize, Sequelize);

// defining soil_testing model for soil_testing table
db.soil_testing = require("./old_databse_models/soil_testing.model.js")(sequelize, Sequelize);

// defining soil_report model for soil_report table
db.soil_report = require("./old_databse_models/soil_report.model")(sequelize, Sequelize);

// defining carbon_sequestration model for carbon_sequestration table
db.carbon_sequestration = require("./carbon_sequestration.model.js")(sequelize, Sequelize);

// defining Tree_Norms model for Tree_Norms table
db.Tree_Norms = require("./Tree_Norms.model.js")(sequelize, Sequelize);

// defining production_technology model for production_technology table
db.production_technology = require("./old_databse_models/production_technology.model.js")(sequelize, Sequelize);

// defining Promo_ticker model for Promo_ticker table
db.Promo_ticker = require("./old_databse_models/Promo_ticker.model.js")(sequelize, Sequelize);

// defining register_user.model model for register_user.model table
db.register_user = require("./old_databse_models/register_user.model.js")(sequelize, Sequelize);

// defining new_farmer_land model for new_farmer_land table
db.new_farmer_land = require("./old_databse_models/new_farmer_land.model.js")(sequelize, Sequelize);

// defining tbl_farmer_crops model for tbl_farmer_crops table
db.tbl_farmer_crops = require("./old_databse_models/tbl_farmer_crops.model.js")(sequelize, Sequelize);

// defining landlease model for landlease table
db.landlease = require("./old_databse_models/landlease.model.js")(sequelize, Sequelize);

// defining db.soil_samples_punjab model for db.soil_samples_punjab table
db.soil_samples_punjab = require("./old_databse_models/soil_samples_punjab.model.js")(sequelize, Sequelize);

// defining crop_record_sub model for crop_record_sub table
db.crop_record_sub = require("./old_databse_models/crop_record_sub.model.js")(sequelize, Sequelize);

// defining subsub_catagories model for subsub_catagories table
db.subsub_catagories = require("./old_databse_models/subsub_catagories.model.js")(sequelize, Sequelize);

// definging sub_catagories model for sub_catagories table
db.sub_catagories = require("./old_databse_models/sub_catagories.model.js")(sequelize, Sequelize);

// definign crop_record model for crop_record table
db.crop_record = require("./old_databse_models/crop_record.model.js")(sequelize, Sequelize);

// defining crop_land_preparation model for crop_land_preparation table
db.crop_land_preparation = require("./old_databse_models/crop_land_preparation.model.js")(sequelize, Sequelize);

// defining notifications model for notifications table
db.notifications = require("./old_databse_models/notifications.model.js")(sequelize, Sequelize);

// defining Blog model for Blog table
db.blogs = require("./old_databse_models/Blogs.model.js")(sequelize, Sequelize);

// defining crop_stages model for crop_stages table

db.crop_stages = require("./old_databse_models/crop_stages.model.js")(sequelize, Sequelize);

//defining categories of the faq's
// db.categories = require("./old_databse_models/catagories.model.js")(sequelize, Sequelize);

//DEFINING  CATOGROY
db.category = require("./Category.model.js")(sequelize, Sequelize);

//defining to get all the Question-answer

db.category = require("./Category.model.js")(sequelize, Sequelize);

//defining Question-answer
db.faqs = require("./CategoryQA.model.js")(sequelize, Sequelize);

//fopr professionals meet
db.meetProfessional = require("./meetProfessional.model.js")(sequelize, Sequelize);









db.alerts = require('./old_databse_models/alerts.model')(sequelize,Sequelize)
db.ticket_support = require('./old_databse_models/ticket_support.model')(sequelize,Sequelize)
db.agrimachinery = require('./old_databse_models/agriMachinery.model')(sequelize,Sequelize)
db.crop_varieties = require('./old_databse_models/crop_varieties.model')(sequelize,Sequelize)
db.crop_varieties_sub = require('./old_databse_models/crop_varieties_sub.model')(sequelize,Sequelize)
db.crop_sowing_methods =  require('./old_databse_models/crop_sowing_methods.model')(sequelize,Sequelize)
db.plant_analysis = require('./old_databse_models/plant_analysis.model')(sequelize,Sequelize)





module.exports = db;