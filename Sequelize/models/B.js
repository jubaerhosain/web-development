const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Sequelize");

const A = require("./A");

const B = sequelize.define("BB", {
    bid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id: {
        type: DataTypes.INTEGER,
        references: {
            model: A,
            key: "id",
        },
    },
});

module.exports = B;
