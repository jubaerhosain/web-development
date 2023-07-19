const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Sequelize");

const A = sequelize.define("AA", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
});


module.exports = A;