const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./Sequelize");

const T = sequelize.define("T", {
    a: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        defaultValue: function () {
            return this.b + this.c;
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
});

async function run() {
    try {
        T.sync();
    } catch (err) {
        console.log(err);
    }
}
run();

async function create() {
    // create a new instance of T
    const t = await T.create({
        b: 10,
        c: 20,
    });

    await t.save();

    console.log(t);

}

create();