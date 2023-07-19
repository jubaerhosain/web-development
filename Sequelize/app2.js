const sequelize = require("./Sequelize");

const Plural = sequelize.define("Plurals", {});

// sync after declaring associations

sequelize.sync();

