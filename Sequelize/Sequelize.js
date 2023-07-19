const { Sequelize } = require("sequelize");

// sequelize is Database/Schema name of mysql that I created
const sequelize = new Sequelize("sequelize", "root", "igloo1119", {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: true,
        freezeTableName: true,
    },
    dialectOptions: {
        connectTimeout: 10000,
    },
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Authenticated");
    } catch (err) {
        console.log(err);
    }
})();

module.exports = sequelize;
