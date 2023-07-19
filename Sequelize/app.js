const sequelize = require("./Sequelize");

const A = require("./models/A");
const B = require("./models/B");

A.hasMany(B, { foreignKey: "id" });
B.belongsTo(A, { foreignKey: "id" });

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
    console.log("bsync");
    await sync();
    console.log("async");

    // const newA = await A.create({
    //     id: 5,
    // });

    // await B.create({
    //     id: 5,
    // });
    // await B.create({
    //     id: 5,
    // });
    // await B.create({
    //     id: 5,
    // });

    // const res = await A.findAll({
    //     where: {
    //         id: 5,
    //     },
    //     include: {
    //         model: B,
    //         attributes: ["bid"],
    //     },
    //     attributes: ["id"],
    //     raw: true,
    // });
    // console.log(res);

    const a = await A.findByPk(5);
    const b = await a.getBBs({
        raw: true,
        attributes: ["id", "bid"],
    });
    console.log(b);
}

create();
