const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

class User extends Model {
    static associate(models) {
        // Define model associations here
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        // other fields
    },
    {
        sequelize,
        modelName: "User",
    }
);

module.exports = User;
