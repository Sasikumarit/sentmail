module.exports = (sequelize, Sequelize) => {
  const mailmastermodel = sequelize.define("mailmaster", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    createddate: {
      type: Sequelize.DATE,
    },
  });

  return mailmastermodel;
};
