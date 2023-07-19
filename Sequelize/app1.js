const sequelize = require("./Sequelize");

const C = require("./models/C");
const D = require("./models/D");
const J = require("./models/J");

C.belongsToMany(D, { through: J, foreignKey: "cid" });
D.belongsToMany(C, { through: J, foreignKey: "did" });

// sync after declaring associations
async function sync() {
    try {
        console.log("syncing");
        sequelize.sync();
    } catch (err) {
        console.log(err.message);
    }
}

async function create() {
    console.log("before sync");
    sync()
        .then(async () => {
            try {
                const c = await C.findByPk(2);
                const d = await D.findByPk(1);
                c.addD(d);
            } catch (err) {
                console.log(err);
            }
        })
        .catch((err) => console.log(err));
    console.log("after sync");
}

create();
