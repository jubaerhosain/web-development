const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../index");

//========================================================
const User = sequelize.define(
    "User",
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allow null defaults to true
        },
    },
    {
        // tableName: "Employees",
    }
);

async function run() {
    await User.sync();
}
run();

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User);

//=============================================================
const Team = sequelize.define(
    "Marks",
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allow null defaults to true
        },
    }
);

async function run1() {
    await Team.sync();
}
run1();