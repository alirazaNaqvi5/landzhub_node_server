module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("Tree_Norms", {
        Tree_species :{
            type: Sequelize.STRING
        },
        Botanical_Name :{
            type: Sequelize.STRING
        },
        Genus :{
            type: Sequelize.STRING
        },
        English_name :{
            type: Sequelize.STRING
        },
        Common_Name :{
            type: Sequelize.STRING
        },
        Family :{
            type: Sequelize.STRING
        },
        Habitat :{
            type: Sequelize.STRING
        },
        Tree_class :{
            type: Sequelize.STRING
        },
        Plant_source :{
            type: Sequelize.STRING
        },
        Temperature_min :{
            type: Sequelize.INTEGER
        },
        Temperature_max :{
            type: Sequelize.INTEGER
        },
        Rainfall_min :{
            type: Sequelize.INTEGER
        },
        Rainfall_max :{
            type: Sequelize.INTEGER
        },
        Soil_type :{
            type: Sequelize.STRING
        },
        Soil_pH :{
            type: Sequelize.FLOAT
        },
        Height_max :{
            type: Sequelize.INTEGER
        },
        MAD :{
            type: Sequelize.INTEGER
        },
        Altitude :{
            type: Sequelize.INTEGER
        },
        PPDistance :{
            type: Sequelize.INTEGER
        },
        RRDistance :{
            type: Sequelize.INTEGER
        },
    });
    return Role;
  };