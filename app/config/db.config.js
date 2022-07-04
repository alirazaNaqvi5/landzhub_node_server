module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "landshubdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };


  // module.exports = {
  //   HOST: "localhost",
  //   USER: "postgres",
  //   PASSWORD: "agronomics",
  //   DB: "postgres",
  //   dialect: "postgres",
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000
  //   }
  // };