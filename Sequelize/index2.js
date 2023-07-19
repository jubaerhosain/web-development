const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./Sequelize");

const User = sequelize.define(
    "Users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: {
                start: 1111, // all digits are the same
                increment: 1000, // increment by 1000 to keep all digits the same
            },
        },
        b: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        c: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
    // {
    //     initialAutoIncrement: 1000,
    // }
);

async function run() {
    try {
        await User.sync();
        create();
    } catch (err) {
        console.log(err);
    }
}
run();

async function create() {
    try {
        const user = await User.create({
            b: 10,
            c: 20,
        });

        console.dir(user);
    } catch (err) {
        console.log(err);
    }
}

// create();
