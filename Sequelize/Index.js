const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./Sequelize");

const User = sequelize.define("Users", {
    userId: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
});

const Teacher = sequelize.define("Teachers", {
    teacherId: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    designation: {
        type: DataTypes.STRING,
    },
});

User.hasOne(Teacher, {
    foreignKey: "teacherId",
    sourceKey: "userId",
    constraints: true,
    onDelete: "CASCADE",
});
Teacher.belongsTo(User, {
    foreignKey: "teacherId",
    targetKey: "userId",
    constraints: true,
    onDelete: "CASCADE",
});

async function run() {
    try {
        await User.sync();
        await Teacher.sync();
    } catch (err) {
        console.log(err);
    }
}
run();
