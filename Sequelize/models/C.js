const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Sequelize");

const C = sequelize.define("C", {
    cid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
});


module.exports = C;