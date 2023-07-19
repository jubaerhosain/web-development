const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Sequelize");
const C = require("./C");
const D = require("./D");

const J = sequelize.define("J", {
    cid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: C,
            key: "cid",
        },
    },
    did: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: D,
            key: "did",
        },
    },
});

module.exports = J;
