const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Sequelize");

const D = sequelize.define("D", {
    did: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
});

module.exports = D;
